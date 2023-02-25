import Fastify, { FastifyInstance } from 'fastify';
import { FastifyAdapter, createBullBoard, BullMQAdapter } from '@bull-board/fastify';
import { Queue, Worker } from 'bullmq';
import FastifySwagger from '@fastify/swagger';
import axios, { isAxiosError } from 'axios';
import { withRefResolver } from 'fastify-zod';
import gateRoutes from './modules/gate/gate.route';
import { gateLocalSchemas } from './modules/gate/gate.schema';
import { RedisKeys, ICleanUserSchema, MQMessageTypes } from '@deur/shared-types';
import Redis from 'ioredis';
import cron from 'node-cron';

const pjson = require('../package.json');

export const REDIS_KEY = 'clubUsers';
export const LOG_GATE_USER = 'Log_Gate_User';

export const redisOptions = {
  port: 6379,
  host: 'localhost',
};

export const redisClient = new Redis({ ...redisOptions });

export const logGateUserQueue = new Queue(LOG_GATE_USER, {
  connection: redisOptions,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 1000 * 10,
    },
  },
});

export function bootstrap(): FastifyInstance {
  const server = Fastify();
  const serverAdapter = new FastifyAdapter();
  createBullBoard({
    queues: [new BullMQAdapter(logGateUserQueue)],
    serverAdapter,
  });

  axios.defaults.headers.common = {
    'x-location': process.env.LOCATION_ID,
    'x-country': process.env.COUNTRY_ID,
  };

  server.register(require('@fastify/redis'), { client: redisClient });

  server.get('/healthcheck', async () => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  // Add all schemas to the server
  for (const schema of [...gateLocalSchemas]) {
    server.addSchema(schema);
  }

  server.register(
    FastifySwagger,
    withRefResolver({
      exposeRoute: true,
      staticCSP: true,
      openapi: {
        info: {
          title: 'Local',
          description: '@deur Local api',
          version: pjson.version,
        },
      },
    })
  );

  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
  });

  // @ts-ignore
  server.register(serverAdapter.registerPlugin(), { prefix: '/ui' });
  // Register all routes
  server.register(gateRoutes, { prefix: '/gate' });

  cacheData();

  getAllLocations();

  cron.schedule('*/30 * * * * *', async function () {
    console.log('🦀 Cron Job is running every 30 seconds');
    cacheData();
  });

  return server;
}

/**
 * Calls Our Cloud API and returns All the users allowed in the Location
 */
async function getDataFromApi(): Promise<ICleanUserSchema[] | undefined> {
  const url = `${process.env.BASE_CLOUD_URL}/v1/user/users-by-location`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const users = data as ICleanUserSchema[];
    return users;
  } catch (error) {
    const data = await redisClient.get(RedisKeys.LocalBaseUsers);
    if (data) {
      return JSON.parse(data as string) as ICleanUserSchema[];
    }
    return;
  }
}

/**
 *  We never clear Cache and we use Redis for Persistence
 *  https://redis.io/docs/management/persistence/
 */
async function cacheData() {
  try {
    const data = await getDataFromApi();
    if (data) {
      await redisClient.set(RedisKeys.LocalBaseUsers, JSON.stringify(data));
      await reWriteAof();
      // We Clear the Just Signed In Users once we have the newest User data from the Cloud
      await redisClient.del(RedisKeys.JUST_SIGNED_IN);
    }
  } catch (error) {
    console.log('cacheData error', error);
  }
}
// Write REDIS to AOF file
async function reWriteAof() {
  const info = await redisClient.info();
  await redisClient.save();
  if (!info.includes('aof_rewrite_in_progress:1')) {
  }
}

const setJustSignedInUser = async (user: ICleanUserSchema) => {
  const data = await redisClient.get(RedisKeys.JUST_SIGNED_IN);
  const parsedData = (JSON.parse(data as string) as ICleanUserSchema[]) || [];
  await redisClient.set(RedisKeys.JUST_SIGNED_IN, JSON.stringify([...parsedData, user]));
};

const worker = new Worker(
  LOG_GATE_USER,
  async (job) => {
    if (job.name === MQMessageTypes.USER_IS_ALLOWED) {
      const url = `${process.env.BASE_CLOUD_URL}/v1/visit/log-visit`;
      try {
        setJustSignedInUser(job.data.user);
        await axios.post(url, { cardNumber: job.data.user.cardNumber });
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          console.log('🦀', err.response?.data);
        }
        throw new Error("Can't log visit");
      }
    }
  },
  {
    limiter: {
      max: 2, // We Limit the number of jobs that can be processed at the same time
      duration: 5000,
    },
  }
);

worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});

worker.on('drained', () => {
  console.log('🦀 All jobs have been processed');
});

// WE use this to get the latest Locations from the Cloud
const getAllLocations = async () => {
  const url = `${process.env.BASE_CLOUD_URL}/v1/location/all-locations`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    await redisClient.set(RedisKeys.ALL_LOCATIONS, JSON.stringify(data));
  } catch (error) {
    console.log('getAllLocations error', error);
  }
};
