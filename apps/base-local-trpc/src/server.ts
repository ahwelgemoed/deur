import Fastify, { FastifyInstance } from 'fastify';
import { Worker } from 'bullmq';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import axios from 'axios';
import { MQMessageTypes, ISignedInUserInRedis } from '@deur/shared-types';
import cron from 'node-cron';

import { mainRedisClient, setUpBullMQBoard } from '@deur/shared-trpc/src/func/redis';

import { createTRPCServerClient, mainLocalRouter } from '@deur/shared-trpc';

import { createContext } from '@deur/shared-trpc/src/trpc/context/localServerContext';

const pjson = require('../package.json');

export const REDIS_KEY = 'clubUsers';
export const LOG_GATE_USER = 'Log_Gate_User';

const localBaseTrpcClient = createTRPCServerClient('http://127.0.0.1:3033/trpc');

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
  LOG_GATE_USER,
  async (job) => {
    if (job.name === MQMessageTypes.USER_IS_ALLOWED) {
      const url = `${process.env.BASE_CLOUD_URL}/v1/visit/log-visit`;
      try {
        setJustSignedInUser(job.data.user);
        await axios.post(url, { cardNumber: job.data.user.cardNumber });
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
