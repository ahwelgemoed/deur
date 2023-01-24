import { User } from '@deur/cloud-prisma-db';
import { EReasons, GateUserResponse, UserCloudModel } from '@deur/shared-types';
import { FastifyInstance, RequestGenericInterface } from 'fastify';
import zodToJsonSchema from 'zod-to-json-schema';
import { prisma } from '../../server';

interface IGateUserRoutes extends RequestGenericInterface {
  Params: {
    userId: string;
  };
}

async function gateUserRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: IGateUserRoutes['Params'];
  }>('/gate-user/:userId', async function (request, reply): Promise<GateUserResponse> {
    const originLocationId = request.headers['x-origin-call'];

    try {
      const userInOrigin = await prisma.user.findFirst({
        where: { id: Number(request.params.userId), locationId: Number(originLocationId) },
      });
      if (userInOrigin && userInOrigin.isAllowed) {
        return {
          user: {
            id: userInOrigin.id,
            name: userInOrigin.name,
            isAllowed: userInOrigin.isAllowed,
          },
          reason: EReasons.USER_FOUND_LOCAL_CACHE_RESET,
          error: undefined,
        };
      }
      if (userInOrigin && !userInOrigin.isAllowed) {
        const payload = {
          user: {
            id: userInOrigin.id,
            name: userInOrigin.name,
            isAllowed: userInOrigin.isAllowed,
          },
          reason: EReasons.USER_HOME_NOT_ALLOWED,
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
      reply.code(500).send({ user: undefined, cached: undefined, error: error });
    }
    return { user: undefined, reason: EReasons.USER_NOT_FOUND, error: undefined };
  });
}

export default gateUserRoutes;
