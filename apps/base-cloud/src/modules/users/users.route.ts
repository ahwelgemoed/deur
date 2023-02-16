import { FastifyInstance } from 'fastify';

import { getUsersByCountry, getUsersByLocation } from './users.controller';
import { $ref } from './users.schemas';

// import { getAllCountries } from './countries.controller';

async function userRoutes(server: FastifyInstance) {
  server.get(
    '/users-by-location',
    {
      schema: {
        headers: $ref('usersByLocationHeader'),
        description: 'Get users by location',
        tags: ['Location', 'User'],
        response: {
          200: $ref('getUsersByLocationWithVisits'),
        },
      },
    },
    getUsersByLocation
  );
  server.get(
    '/users-by-country',
    {
      schema: {
        headers: $ref('usersByCountryHeader'),
        description: 'Get users by country',
        tags: ['Country', 'User'],
        response: {
          200: $ref('getUsersByLocation'),
        },
      },
    },
    getUsersByCountry
  );
}

export default userRoutes;
