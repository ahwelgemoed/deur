import { FastifyInstance } from 'fastify';

import { createDevice, getAllDeviceTypes } from './devices.controller';
import { $ref } from './devices.schemas';

// import { getAllCountries } from './countries.controller';

async function deviceRoutes(server: FastifyInstance) {
  server.get(
    '/all-device-types',
    {
      schema: {
        description: 'Get all available devices',
        tags: ['Device'],
        response: {
          200: $ref('getAllDeviceTypes'),
        },
      },
    },
    getAllDeviceTypes
  );
  server.post(
    '/create-device',
    {
      schema: {
        description: 'Create a new device',
        tags: ['Device'],
        body: $ref('createDeviceBody'),
        response: {
          200: $ref('deviceResponse'),
        },
      },
    },
    createDevice
  );
}

export default deviceRoutes;
