import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { appRouter } from '../../generated/routers';

export const t = initTRPC.create({
  transformer: superjson,
});

export const mainCloudRouter = t.router({
  generatedRoutes: appRouter,
});

export type CloudAppRouter = typeof mainCloudRouter;
