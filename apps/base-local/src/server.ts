import Fastify, { FastifyInstance } from 'fastify';
import FastifySwagger from '@fastify/swagger';
import axios from 'axios';
import { withRefResolver } from 'fastify-zod';
import gateRoutes from './modules/gate/gate.route';
import { gateLocalSchemas } from './modules/gate/gate.schema';
import { RedisKeys, ICleanUserSchema } from '@deur/shared-types';
import Redis from 'ioredis';
import cron from 'node-cron';

const pjson = require('../package.json');

export const REDIS_KEY = 'clubUsers';

export const redisClient = new Redis({ host: 'localhost', port: 6379 });

// Get away from RootDir in TSConfig
export function bootstrap(): FastifyInstance {
  const server = Fastify();
  axios.defaults.headers.common = {
    'x-location': process.env.LOCATION_ID,
  };

  server.register(require('@fastify/redis'), { client: redisClient });

  server.get('/healthcheck', async (request, reply) => {
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

  // Register all routes
  server.register(gateRoutes, { prefix: '/gate' });

  cacheData();

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
    }
  } catch (error) {
    console.log('cacheData error', error);
  }
}

async function reWriteAof() {
  const info = await redisClient.info();
  await redisClient.save();
  if (!info.includes('aof_rewrite_in_progress:1')) {
  }
}
