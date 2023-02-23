import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import axios from 'axios';

import { mainLocalRouter } from '@deur/shared-trpc';

import { createContext } from './trpc/context.trpc';
import { connectRedis } from './utils/redis';

const pjson = require('../package.json');

export const REDIS_KEY = 'clubUsers';
export const LOG_GATE_USER = 'Log_Gate_User';

export const redisOptions = {
  port: 6379,
  host: 'localhost',
};

export function bootstrap(): FastifyInstance {
  const server = Fastify();

  server.register(cors, {
    credentials: true,
    origin: '*',
  });

  axios.defaults.headers.common = {
    'x-location': process.env.LOCATION_ID,
    'x-country': process.env.COUNTRY_ID,
  };

  server.get('/healthcheck', async () => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: mainLocalRouter, createContext },
  });

  connectRedis();

  return server;
}
