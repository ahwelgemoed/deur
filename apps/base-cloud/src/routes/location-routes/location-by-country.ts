import { FastifyInstance } from 'fastify';
import { prisma } from '../../server';

async function locationRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { countryId: string };
  }>('/location-by-country/:countryId', async function (request, reply) {
    try {
      const allLocations = await prisma.location.findMany({
        where: { countryId: Number(request.params.countryId) },
      });
      return { locations: allLocations, cached: undefined, error: undefined };
    } catch (error) {
      return { locations: undefined, cached: undefined, error: error };
    }
  });
}

export default locationRoutes;
