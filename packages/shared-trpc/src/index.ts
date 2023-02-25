export { mainLocalRouter } from './trpc/routers/local.router';
export type { LocalAppRouter } from './trpc/routers/local.router';
export { createTRPCServerClient } from './trpc/clients/local.client';

export { mainCloudRouter } from './trpc/routers/cloud.router';
export type { CloudAppRouter } from './trpc/routers/cloud.router';

export { connectRedis, mainRedisClient } from './func/redis';
