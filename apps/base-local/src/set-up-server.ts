import autoload from '@fastify/autoload';
import axios from 'axios';
import Redis from 'ioredis';
import Fastify from 'fastify';
import path from 'node:path';
import axiosRetry from 'axios-retry';

import { Prisma as CloudPrisma } from '@deur/cloud-prisma-db';

import { PrismaClient as LocalPrismaClient } from '@deur/local-prisma-db';

import { RedisKeys } from '@deur/shared-types';

export const prisma = new LocalPrismaClient();

export const REDIS_KEY = 'clubUsers';

const EXPIRATION_TIME_MIN = 60;
export const redis = new Redis();
// TODO::COULD RUN IN MULTI MODE --> LOOK INTO THIS
const subscriber = new Redis();

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
});

// subscriber.subscribe('__keyevent@0__:expired', (error, count) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
// });

// // When a message is received on the channel, it means a key has expired
// subscriber.on('message', (channel, message) => {
//   if (message === REDIS_KEY) {
//     runBeforeServerStart();
//   }
// });

const fastify = Fastify({
  logger: true,
});

const PORT = process.env.BASE_LOCAL_PORT || 3032;
const start = async () => {
  try {
    redis.config('SET', 'notify-keyspace-events', 'Ex');
    fastify.register(autoload, {
      dir: path.join(__dirname, './routes'),
      options: { prefix: 'v1' },
    });
    await fastify.ready(async () => {
      await runBeforeServerStart();
      await fastify.listen({ port: Number(PORT), host: '0.0.0.0' });
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export { start };

async function runBeforeServerStart() {
  console.log('👩‍🦳 RUNNING REDIS');
  const url = `${process.env.BASE_CLOUD_URL}/v1/user-routes/users-by-location/${process.env.CLUB_ID}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;

    const users = data.users as CloudPrisma.UserGroupByOutputType[];
    if (!users) {
      throw new Error('No users found');
    }
    console.time('dbsave');

    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      await prisma.local_User.upsert({
        where: {
          id: user.id,
        },
        update: {
          isAllowed: user.isAllowed,
          cardNumber: user.cardNumber,
          birthDay: user.birthDay,
        },
        create: {
          id: user.id,
          name: user.name,
          isAllowed: user.isAllowed,
          cardNumber: user.cardNumber,
          birthDay: user.birthDay,
          location: user.locationId.toString(),
        },
      });
    }
    console.timeEnd('dbsave');

    // redis.set(REDIS_KEY, JSON.stringify(users));
    // redis.expire(REDIS_KEY, EXPIRATION_TIME_MIN);
  } catch (error) {
    console.error('error', error);
  }
}
/**
 * Get All Data into SQLLite
 * add to Cahce
 * before Cache expires, get new data from cloud
 * update cache
 * update SQLLite
 *
 */
