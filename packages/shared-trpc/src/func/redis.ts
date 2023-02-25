import { FastifyAdapter, createBullBoard, BullMQAdapter } from '@bull-board/fastify';
import { ICleanUserSchema } from '@deur/shared-types';
import { Queue } from 'bullmq';
import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

export const LOG_GATE_USER = 'Log_Gate_User';
export const redisOptions = {
  port: 6379,
  host: 'localhost',
};

const mainRedisClient = new Redis({ ...redisOptions });

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

export const setUpBullMQBoard = (server: FastifyInstance) => {
  const serverAdapter = new FastifyAdapter();
  createBullBoard({
    queues: [new BullMQAdapter(logGateUserQueue)],
    serverAdapter,
  });
  serverAdapter.setBasePath('/ui');
  // @ts-ignore
  server.register(serverAdapter.registerPlugin(), { prefix: '/ui' });
};

export type TRedisClient = typeof mainRedisClient;

export { mainRedisClient };

export async function saveRedisInstance() {
  // const info = await mainRedisClient.info();
  // await mainRedisClient.save();
  // if (!info.includes('aof_rewrite_in_progress:1')) {
  // }
}

export const findCardNumberInRedisCache = async (
  cache: string | null,
  cardNumber: string
): Promise<ICleanUserSchema | false> => {
  if (!cache) {
    return false;
  }
  const parsedCache: ICleanUserSchema[] = JSON.parse(cache);
  const isUserInCache = parsedCache.find(
    (user: ICleanUserSchema) => user.cardNumber === cardNumber
  );
  if (!isUserInCache) {
    return false;
  }
  return isUserInCache;
};
