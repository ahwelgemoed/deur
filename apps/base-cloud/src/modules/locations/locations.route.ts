import { FastifyInstance } from 'fastify';

import { getLocationsByCountry } from './locations.controller';
import { $ref } from './locations.schemas';

async function locationRoutes(server: FastifyInstance) {
  server.get(
    '/location-by-country/:countryId',
    {
      schema: {
        params: $ref('getAllLocationsParams'),
        description: 'Get all locations by country',
        tags: ['Location'],
        response: {
          200: $ref('getAllLocationsResponse'),
        },
      },
    },
    getLocationsByCountry
  );
}

export default locationRoutes;
