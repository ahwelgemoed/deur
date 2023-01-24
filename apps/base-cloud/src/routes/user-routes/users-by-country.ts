import { FastifyInstance } from 'fastify';
import { prisma } from '../../server';

async function userLocationRoute(fastify: FastifyInstance) {
  fastify.get<{
    Params: { countryId: string };
  }>('/users-by-country/:countryId', async function (request, reply) {
    try {
      const allUsersInCountry = await prisma.country.findUnique({
        where: { id: Number(request.params.countryId) },
        include: {
          locations: {
            include: { users: true },
          },
        },
      });
      return { users: allUsersInCountry, cached: undefined, error: undefined };
    } catch (error) {
      return { local: undefined, cached: undefined, error: error };
    }
  });
}

export default userLocationRoute;
