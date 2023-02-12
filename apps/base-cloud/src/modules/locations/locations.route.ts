import { FastifyInstance } from 'fastify';

import { getLocations, getLocationsByCountry } from './locations.controller';
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
  server.get(
    '/all-locations',
    {
      schema: {
        headers: $ref('usersByLocationHeader'),
        description: 'Get all locations',
        tags: ['Location'],
        response: {
          200: $ref('getAllLocationsResponse'),
        },
      },
    },
    getLocations
  );
}

export default locationRoutes;
