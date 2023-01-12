import { EReasons } from '@deur/shared-types';
import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function gateUserRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { userId: string };
  }>('/gate-user/:userId', async function (request, reply) {
    const originLocationId = request.headers['x-origin-call'];

    try {
      const userInOrigin = await prisma.user.findFirst({
        where: { id: Number(request.params.userId), locationId: Number(originLocationId) },
      });
      if (userInOrigin && userInOrigin.isAllowed) {
        return {
          user: userInOrigin,
          reason: EReasons.USER_FOUND_LOCAL_CACHE_RESET,
          error: undefined,
        };
      }
      if (userInOrigin && !userInOrigin.isAllowed) {
        const payload = {
          user: userInOrigin,
          reason: EReasons.USER_NOT_HOME_NOT_ALLOWED,
          error: undefined,
        };
        await fastify.redis.setex(String(userInOrigin.id), 60 * 5, JSON.stringify(payload));
        return {
          ...payload,
        };
      }

      const userInForeign = await prisma.user.findFirst({
        where: { id: Number(request.params.userId) },
      });
      if (userInForeign) {
        const payload = {
          user: userInForeign,
          reason: EReasons.USER_NOT_HOME_NOT_ALLOWED,
          error: undefined,
        };
        await fastify.redis.setex(String(userInForeign.id), 60 * 5, JSON.stringify(payload));
        return {
          ...payload,
        };
      }
      if (!userInForeign) {
        return {
          user: undefined,
          reason: EReasons.USER_NOT_FOUND,
          error: undefined,
        };
      }
    } catch (error) {
      console.log('error', error);
      return { user: undefined, cached: undefined, error: error };
    }
  });
}

export default gateUserRoutes;
