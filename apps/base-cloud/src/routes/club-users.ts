import { FastifyInstance } from 'fastify';

import { prisma } from '../server';

async function clientRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { locationId: string };
    Querystring: { clearCache: string };
  }>(
    '/location-users/:locationId',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        querystring: {
          type: 'object',
          properties: {
            clearCache: { type: 'string' },
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              users: { type: 'array' },
              cached: { type: 'boolean' },
            },
          },
        },
      },
    },
    async function (request, reply) {
      const { locationId } = request.params;
      if (request.query.clearCache === 'true') {
        fastify.redis.del(`club-users:${request.params.locationId}`);
      }

      const cachedClubUsers = await fastify.redis.get(`club-users:${request.params.locationId}`);

      if (cachedClubUsers) {
        return { users: JSON.parse(cachedClubUsers), cached: true };
      }

      const clubUsers = await prisma.user.findMany({
        where: { locationId: Number(locationId) },
      });

      // await fastify.redis.setex(
      //   `club-users:${request.params.locationId}`,
      //   60 * 60,
      //   JSON.stringify(clubUsers)
      // );

      return { users: clubUsers, cached: false };
    }
  );
}

export default clientRoutes;
