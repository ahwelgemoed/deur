import autoload from '@fastify/autoload';
import axios from 'axios';
import Redis from 'ioredis';
import Fastify from 'fastify';
import path from 'node:path';
import axiosRetry from 'axios-retry';
import cron from 'node-cron';

import { Prisma as CloudPrisma } from '@deur/cloud-prisma-db';

import { RedisKeys } from '@deur/shared-types';

export const redis = new Redis();
const PORT = process.env.BASE_LOCAL_PORT || 3032;

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
});

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  try {
    fastify.register(autoload, {
      dir: path.join(__dirname, './routes'),
      options: { prefix: 'v1' },
    });
    await fastify.ready(async () => {
      await cacheData();
      await fastify.listen({ port: Number(PORT), host: '0.0.0.0' });
      cron.schedule('*/30 * * * * *', async function () {
        cacheData();
      });
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

async function getDataFromApi() {
  console.log('🚀 Called API');
  const url = `${process.env.BASE_CLOUD_URL}/v1/user-routes/users-by-location/${process.env.CLUB_ID}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const users = data.users as CloudPrisma.UserGroupByOutputType[];
    return users;
  } catch (error) {
    const data = await redis.get(RedisKeys.LocalBaseUsers);
    if (data) {
      return JSON.parse(data as any);
    }
  }
}

async function cacheData() {
  try {
    const data = await getDataFromApi();
    if (data) {
      await redis.set(RedisKeys.LocalBaseUsers, JSON.stringify(data));
      await reWriteAof();
    }
  } catch (error) {
    console.log('cacheData error', error);
  }
}

async function reWriteAof() {
  const info = await redis.info();
  await redis.save();
  if (!info.includes('aof_rewrite_in_progress:1')) {
  }
}

export { start };
