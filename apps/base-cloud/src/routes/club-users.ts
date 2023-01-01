import { FastifyInstance } from "fastify";

import { prisma } from "../set-up-server";

async function clientRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { id: string };
    Querystring: { clearCache: string };
  }>(
    "/club-users/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
        },
        querystring: {
          type: "object",
          properties: {
            clearCache: { type: "string" },
          },
        },
        response: {
          200: {
            type: "object",
            properties: {
              users: { type: "array" },
              cached: { type: "boolean" },
            },
          },
        },
      },
    },
    async function (request, reply) {
      const { id } = request.params;
      if (request.query.clearCache === "true") {
        fastify.redis.del(`club-users:${request.params.id}`);
      }

      const cachedClubUsers = await fastify.redis.get(
        `club-users:${request.params.id}`
      );

      if (cachedClubUsers) {
        return { users: JSON.parse(cachedClubUsers), cached: true };
      }

      const clubUsers = await prisma.user.findMany({
        where: { clubId: Number(id) },
      });

      await fastify.redis.setex(
        `club-users:${request.params.id}`,
        60 * 60,
        JSON.stringify(clubUsers)
      );

      return { users: clubUsers, cached: false };
    }
  );
}

export default clientRoutes;
