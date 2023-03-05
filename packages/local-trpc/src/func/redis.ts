import { FastifyAdapter, createBullBoard, BullMQAdapter } from '@bull-board/fastify';
import { ICleanUserSchema, MQTypes, ReasonForVisit } from '@deur/shared-types';
import { Queue } from 'bullmq';
import { FastifyInstance } from 'fastify';
import Redis from 'ioredis';

export const redisOptions = {
  port: 6379,
  host: 'localhost',
};

const mainRedisClient = new Redis({ ...redisOptions });

export const logGateUserQueue = new Queue(MQTypes.LOG_GATE_USER, {
  connection: redisOptions,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 1000 * 10,
    },
  },
});
export const createNewUserQueue = new Queue(MQTypes.CREATE_USER, {
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
    queues: [new BullMQAdapter(logGateUserQueue), new BullMQAdapter(createNewUserQueue)],
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

export const replyWithErrorResponse = (
  reason: ReasonForVisit,
  isAllowed = false,
  key: string,
  user: ICleanUserSchema | undefined
) => {
  mainRedisClient.set(key, JSON.stringify({ ...user, reason }), 'EX', 60);
  return {
    isAllowed,
    reason,
  };
};
export const replyResponse = (reason: ReasonForVisit, isAllowed = false) => {
  return {
    isAllowed,
    reason,
  };
};
