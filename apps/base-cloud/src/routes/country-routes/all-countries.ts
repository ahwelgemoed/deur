import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function countryRoutes(fastify: FastifyInstance) {
  fastify.get<{}>('/all-countries', async function (request, reply) {
    try {
      const allCountries = await prisma.country.findMany({});
      return { counties: allCountries, cached: undefined, error: undefined };
    } catch (error) {
      return { counties: undefined, cached: undefined, error: error };
    }
  });
}

export default countryRoutes;
