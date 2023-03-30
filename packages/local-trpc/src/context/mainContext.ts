import { CloudAppRouter } from '@deur/cloud-trpc';
import { createTRPCServerClient } from '@deur/shared-functions';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import axios from 'axios';

import {
  logGateUserQueue,
  createNewUserQueue,
  mainRedisClient,
  saveRedisInstance,
} from '../func/redis';

const cloudBaseTrpcClient = createTRPCServerClient<CloudAppRouter>(`http://127.0.0.1:3030/trpc`); //CLOUD

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const metaData = {
    locationId: process.env.LOCATION_ID,
    countryId: process.env.COUNTRY_ID,
  };
  axios.defaults.headers.common = {
    'x-location': process.env.LOCATION_ID,
    'x-country': process.env.COUNTRY_ID,
  };
  // ALL MQ CLIENTS
  const mq = {
    logGateUserQueue,
    createNewUserQueue,
  };
  return {
    req,
    res,
    axios,
    redis: mainRedisClient,
    mq,
    saveRedisInstance,
    cloudBaseTrpcClient,
    metaData,
  };
}

export type LocalContext = inferAsyncReturnType<typeof createContext>;
