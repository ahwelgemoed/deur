import { FastifyInstance } from 'fastify';

import { getAllDeviceTypes } from './devices.controller';
import { $ref } from './devices.schemas';

// import { getAllCountries } from './countries.controller';

async function deviceRoutes(server: FastifyInstance) {
  server.get(
    '/all-device-types',
    {
      schema: {
        response: {
          200: $ref('getAllDeviceTypes'),
        },
      },
    },
    getAllDeviceTypes
  );
}

export default deviceRoutes;
