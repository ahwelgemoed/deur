import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import axios from 'axios';

import { logGateUserQueue, mainRedisClient, saveRedisInstance } from '../func/redis';

export function createContext({ req, res }: CreateFastifyContextOptions) {
  axios.defaults.headers.common = {
    'x-location': process.env.LOCATION_ID,
    'x-country': process.env.COUNTRY_ID,
  };
  // ALL MQ CLIENTS
  const mq = {
    logGateUserQueue,
  };
  return { req, res, axios, redis: mainRedisClient, mq, saveRedisInstance };
}

export type LocalContext = inferAsyncReturnType<typeof createContext>;
