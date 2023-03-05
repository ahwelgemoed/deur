import { ICleanUserSchema, ReasonForVisit } from '@deur/shared-types';
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { LocalContext } from '../context/mainContext';

export const helpMemberCloudTrpc = initTRPC.context<LocalContext>().create({
  transformer: superjson,
});

export const helpMemberProcedures = helpMemberCloudTrpc.procedure; // CAN BE EXPANDED
type Userwithreason = ICleanUserSchema & { reason: ReasonForVisit };

export const helpMemberRoute = helpMemberCloudTrpc.router({
  getUserToHelp: helpMemberProcedures
    .input(z.object({ cardNumber: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const memberInCacheToHelp = await ctx.redis.get(input.cardNumber);
        if (!memberInCacheToHelp) {
          return null;
        }
        const parsedMemberInCacheToHelp: Userwithreason | undefined =
          JSON.parse(memberInCacheToHelp);
        return parsedMemberInCacheToHelp;
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong - Could Not Log Visit',
          cause: err,
        });
      }
    }),
});
