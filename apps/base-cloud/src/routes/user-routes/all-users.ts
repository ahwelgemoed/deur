import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function userRoutes(fastify: FastifyInstance) {
  fastify.get<{}>('/all-users', async function (request, reply) {
    try {
      const allUsers = await prisma.user.findMany({});
      return { users: allUsers, cached: undefined, error: undefined };
    } catch (error) {
      return { local: undefined, cached: undefined, error: error };
    }
  });
}

export default userRoutes;
