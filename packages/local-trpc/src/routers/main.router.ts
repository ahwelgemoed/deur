import { mainCloudRouter } from '@deur/cloud-trpc';
import { MQMessageTypes, ReasonForVisit, RedisKeys } from '@deur/shared-types';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { createMemberRoute } from './createMember.router';
import { helpMemberRoute } from './helpUserAtGate.router';
import { LocalContext } from '../context/mainContext';
import { findCardNumberInRedisCache, replyResponse, replyWithErrorResponse } from '../func/redis';
import { isFeasibleVisit } from '../services/userVisit.service';

export const t = initTRPC.context<LocalContext>().create({
  transformer: superjson,
});

export const mainLocalRouter = t.router({
  helpMemberRoute,
  createMemberRoute,
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
      const justSingedInCache: string | null = await ctx.redis.get(input.cardNumber);
      if (justSingedInCache) {
        return replyWithErrorResponse(
          ReasonForVisit.JUST_SIGNED_IN,
          false,
          input.cardNumber,
          JSON.parse(justSingedInCache)
        );
      }
      // Check if  User in Local Redis Cache
      const isUserInLocalCache = await ctx.redis.get(RedisKeys.LocalBaseUsers);

      const isUserInLocalCacheRedis = await findCardNumberInRedisCache(
        isUserInLocalCache,
        input.cardNumber
      );

      if (!isUserInLocalCacheRedis) {
        return replyWithErrorResponse(ReasonForVisit.NOT_USER, false, input.cardNumber, undefined);
      }
      // Check if User is Feasible
      const isGeoFeasible = await isFeasibleVisit(ctx, isUserInLocalCacheRedis.visits[0]);

      if (!isGeoFeasible.isFeasible) {
        return replyWithErrorResponse(isGeoFeasible.reason, false, input.cardNumber, undefined);
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
      return replyWithErrorResponse(
        ReasonForVisit.ERROR,
        false,
        input.cardNumber,
        isUserInLocalCacheRedis
      );
    }),
});

export type LocalAppRouter = typeof mainLocalRouter;

export const mergedAppRouter = t.router({
  local: mainLocalRouter,
  cloud: mainCloudRouter,
});

export type MergedAppRouter = typeof mergedAppRouter;
