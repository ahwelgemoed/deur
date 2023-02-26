import { MQMessageTypes, ReasonForVisit, RedisKeys } from '@deur/shared-types';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { findCardNumberInRedisCache, replyResponse } from '../../func/redis';
import { LocalContext } from '../context/localServerContext';
import { isFeasibleVisit } from '../services/userVist.service';

export const t = initTRPC.context<LocalContext>().create({
  transformer: superjson,
});

export const mainLocalRouter = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() }).nullish()).query(({ input }) => {
    return `Hello ${input?.name ?? 'World'}`;
  }),
  hydrateLocationsUsers: t.procedure.query(async ({ ctx }) => {
    const usersByLocationUrl = `${process.env.BASE_CLOUD_URL}/v1/user/users-by-location`;
    try {
      const response = await ctx.axios.get(usersByLocationUrl);
      const data = await response.data;
      await ctx.redis.set(RedisKeys.LocalBaseUsers, JSON.stringify(data));
    } catch (error) {
      console.log('Error :: hydrateLocationsUsers', error);
    }
    try {
      const allLocationsUrl = `${process.env.BASE_CLOUD_URL}/v1/location/all-locations`;
      const response = await ctx.axios.get(allLocationsUrl);
      const data = await response.data;
      await ctx.redis.set(RedisKeys.ALL_LOCATIONS, JSON.stringify(data));
    } catch (error) {
      console.log('Error :: hydrateLocationsUsers', error);
    }
  }),
  canThisUserBeLetInToTheClub: t.procedure
    .input(z.object({ cardNumber: z.string() }))
    .query(async ({ input, ctx }) => {
      // Check if USER is In Recent Redis Cache
      const justSingedInCache = await ctx.redis.get(input.cardNumber);

      if (justSingedInCache) {
        return replyResponse(ReasonForVisit.JUST_SIGNED_IN);
      }
      // Check if  User in Local Redis Cache
      const isUserInLocalCache = await ctx.redis.get(RedisKeys.LocalBaseUsers);

      const isUserInLocalCacheRedis = await findCardNumberInRedisCache(
        isUserInLocalCache,
        input.cardNumber
      );
      if (!isUserInLocalCacheRedis) {
        return replyResponse(ReasonForVisit.NOT_USER);
      }
      // Check if User is Feasible
      const isGeoFeasible = await isFeasibleVisit(ctx, isUserInLocalCacheRedis.visits[0]);

      if (!isGeoFeasible.isFeasible) {
        return replyResponse(isGeoFeasible.reason);
      }
      // THIS WILL ALLOW THE USER TO ENTER THE LOCATION
      if (isGeoFeasible.isFeasible) {
        // SET USER TO QUEUE - WILL BE ADDED TO CLOUD SERVER
        ctx.mq.logGateUserQueue.add(
          MQMessageTypes.USER_IS_ALLOWED,
          { user: { ...isUserInLocalCacheRedis, reason: isGeoFeasible.reason } },
          {
            removeOnComplete: {
              age: 3600,
              count: 1000,
            },
          }
        );
        return replyResponse(isGeoFeasible.reason, true);
      }
      return replyResponse(ReasonForVisit.ERROR);
    }),
});

export type LocalAppRouter = typeof mainLocalRouter;
