import { FastifyInstance } from 'fastify';

import { getAllCountries } from './countries.controller';
import { $ref } from './countries.schemas';

async function countryRoutes(server: FastifyInstance) {
  server.get(
    '/all-countries',
    {
      schema: {
        description: 'Get all operational Countries',
        tags: ['Countries'],
        response: {
          200: $ref('getAllCountriesResponse'),
        },
      },
    },
    getAllCountries
  );
}

export default countryRoutes;
