import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { LocalContext } from '../context/mainContext';

export const visitCloudTrpc = initTRPC.context<LocalContext>().create({
  transformer: superjson,
});

export const visitProcedures = visitCloudTrpc.procedure; // CAN BE EXPANDED

export const createMemberRoute = visitCloudTrpc.router({
  logVisitAtLocation: visitProcedures
    .input(
      z.object({
        name: z.string(),
        birthDay: z.date(),
        clubId: z.string(),
        email: z.coerce.string().email(),
        isAllowed: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong - Could Not Log Visit',
          cause: err,
        });
      }
    }),
});
