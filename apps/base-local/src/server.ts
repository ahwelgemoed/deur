import Fastify, { FastifyInstance } from 'fastify';
import { Worker } from 'bullmq';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { MQMessageTypes, ISignedInUserInRedis, MQTypes } from '@deur/shared-types';
import * as cron from 'node-cron';
import { mainRedisClient, setUpBullMQBoard } from '@deur/local-trpc/src/func/redis';
import { mainLocalRouter } from '@deur/local-trpc';
import { CloudAppRouter } from '@deur/cloud-trpc';
import { createTRPCServerClient } from '@deur/shared-functions';
import { createContext } from '@deur/local-trpc/src/context/mainContext';

const pjson = require('../package.json');

const localBaseTrpcClient = createTRPCServerClient<typeof mainLocalRouter>(
  'http://127.0.0.1:3033/trpc'
); //SELF

const cloudBaseTrpcClient = createTRPCServerClient<CloudAppRouter>(`http://127.0.0.1:3030/trpc`); //CLOUD

export function bootstrap(): FastifyInstance {
  const server = Fastify();
  setUpBullMQBoard(server);
  server.register(cors, {
    credentials: true,
    origin: '*',
  });

  server.get('/healthcheck', async () => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: mainLocalRouter, createContext },
  });

  cron.schedule('*/30 * * * * *', async function () {
    console.log('🦀 Cron Job is running every 30 seconds');
    await localBaseTrpcClient.hydrateLocationsUsers.query();
  });

  return server;
}

const setJustSignedInUser = async (user: ISignedInUserInRedis) => {
  // SET EXPIRATION TIME TO 60 SECONDS
  await mainRedisClient.set(user.cardNumber, JSON.stringify(user), 'EX', 60);
};

const worker = new Worker(
  MQTypes.LOG_GATE_USER,
  async (job) => {
    // Log the user in Cloud DB
    if (job.name === MQMessageTypes.USER_IS_ALLOWED) {
      try {
        const returnedVisit = await cloudBaseTrpcClient.visitsRouter.logVisitAtLocation.mutate({
          cardNumber: job.data.user.cardNumber,
          locationId: job.data.user.locationId,
        });
        if (returnedVisit) {
          setJustSignedInUser(job.data.user);
        }
      } catch (err: unknown) {
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

const createUserWorker = new Worker(
  MQTypes.CREATE_USER,
  async (job) => {
    // Log the user in Cloud DB
    if (job.name === MQMessageTypes.CREATE_USER_LOCAL) {
      // TODO - Create user in Cloud DB
      console.log('job.data', job.data);
    }
  },
  {
    limiter: {
      max: 2, // We Limit the number of jobs that can be processed at the same time
      duration: 5000,
    },
  }
);
createUserWorker.on('completed', (job) => {
  console.log(`Create USER ${job.id} has completed!`);
});

createUserWorker.on('failed', (job, err) => {
  console.log(`Create USER ${job?.id} has failed with ${err.message}`);
});

createUserWorker.on('drained', () => {
  console.log('🦀 Create USER All jobs have been processed');
});
