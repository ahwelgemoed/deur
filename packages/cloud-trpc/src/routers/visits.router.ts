import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { CloudContext } from '../context/mainContext';

export const visitCloudTrpc = initTRPC.context<CloudContext>().create({
  transformer: superjson,
});

export const visitProcedures = visitCloudTrpc.procedure; // CAN BE EXPANDED

export const visitsRouter = visitCloudTrpc.router({
  logVisitAtLocation: visitProcedures
    .input(
      z.object({
        cardNumber: z.string(),
        locationId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.prisma.user.findUnique({
          where: {
            cardNumber: input.cardNumber.trim(),
          },
        });
        if (!user) {
          // TODO :: HOW DID THIS HAPPEN???
          throw new Error('User not found');
        }

        const visit = await ctx.prisma.visitsToLocation.create({
          data: {
            userId: user.id,
            locationId: input.locationId,
          },
        });
        return visit;
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something went wrong - Could Not Log Visit',
          cause: err,
        });
      }
    }),
});
