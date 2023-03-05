import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { LocalContext } from '../context/mainContext';

export const helpMemberCloudTrpc = initTRPC.context<LocalContext>().create({
  transformer: superjson,
});

export const helpMemberProcedures = helpMemberCloudTrpc.procedure; // CAN BE EXPANDED

export const helpMemberRoute = helpMemberCloudTrpc.router({
  getUserToHelp: helpMemberProcedures
    .input(z.object({ cardNumber: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        console.log('⛔️⛔️⛔️⛔️memberInCacheToHelp input', input);
        // const memberInCacheToHelp = await ctx.redis.get(input.cardNumber);
        // console.log('⛔️⛔️⛔️⛔️memberInCacheToHelp', memberInCacheToHelp);
        // return memberInCacheToHelp;
        return 'HELLO';
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong - Could Not Log Visit',
          cause: err,
        });
      }
    }),
});
