import { FastifyInstance } from 'fastify';

import { getAllCountries } from './countries.controller';
import { $ref } from './modules';

async function countryRoutes(server: FastifyInstance) {
  server.get(
    '/all-countries',
    {
      schema: {
        response: {
          200: $ref('getAllCountriesResponse'),
        },
      },
    },
    getAllCountries
  );
}

export default countryRoutes;
