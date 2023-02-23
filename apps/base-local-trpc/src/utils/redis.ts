import Redis from 'ioredis';

export const redisOptions = {
  port: 6379,
  host: 'localhost',
  lazyConnect: true,
};

const mainRedisClient = new Redis({ ...redisOptions });

export const connectRedis = async () => {
  try {
    await mainRedisClient.connect();
    console.log('Redis client connected...');
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

mainRedisClient.on('error', (err) => console.log(err));

export { mainRedisClient };
