import { FastifyInstance } from 'fastify';
import { prisma } from '../../server';

async function userLocationRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { locationId: string };
  }>('/users-by-location/:locationId', async function (request, reply) {
    try {
      const allUsers = await prisma.user.findMany({
        where: { locationId: Number(request.params.locationId) },
      });
      return { users: allUsers, cached: undefined, error: undefined };
    } catch (error) {
      return { local: undefined, cached: undefined, error: error };
    }
  });
}

export default userLocationRoutes;
