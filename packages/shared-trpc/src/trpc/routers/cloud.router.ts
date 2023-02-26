import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { visitsRouter } from './cloudRouters.ts/visits.router';
import { appRouter } from '../../generated/routers';
import { CloudContext } from '../context/cloudServerContext';

export const cloudTrpc = initTRPC.context<CloudContext>().create({
  transformer: superjson,
});

export const mainCloudRouter = cloudTrpc.router({
  generatedRoutes: appRouter,
  visitsRouter,
});

export type CloudAppRouter = typeof mainCloudRouter;
