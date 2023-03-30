import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { visitsRouter } from './visits.router';
import { CloudContext } from '../context/mainContext';
import { appRouter } from '../generated/routers';

export const cloudTrpc = initTRPC.context<CloudContext>().create({
  transformer: superjson,
});

export const mainCloudRouter = cloudTrpc.router({
  generatedRoutes: appRouter,
  visitsRouter,
});

export type CloudAppRouter = typeof mainCloudRouter;
