import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

export const t = initTRPC.create({
  transformer: superjson,
});

export const mainLocalRouter = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() }).nullish()).query(({ input }) => {
    return `Hello ${input?.name ?? 'World'}`;
  }),
});

export type LocalAppRouter = typeof mainLocalRouter;
