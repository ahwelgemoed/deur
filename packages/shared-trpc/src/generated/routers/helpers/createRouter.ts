import * as trpc from '@trpc/server';

import { Context } from '../../../context/prisma.context';

export const t = trpc.initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;