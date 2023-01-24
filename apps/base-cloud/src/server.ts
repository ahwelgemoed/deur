import { PrismaClient } from '@deur/cloud-prisma-db';
import cors from '@fastify/cors';
import FastifySwagger from '@fastify/swagger';
import Fastify, { FastifyInstance } from 'fastify';
import { withRefResolver } from 'fastify-zod';

import countryRoutes from './modules/countries/countries.route';
import { countrySchemas } from './modules/countries/countries.schemas';
import deviceRoutes from './modules/devices/devices.route';
import { deviceSchemas } from './modules/devices/devices.schemas';

const pjson = require('../package.json');

export const prisma = new PrismaClient();

export function bootstrap(): FastifyInstance {
  const server = Fastify({
    logger: true,
  });

  server.register(cors, {
    credentials: true,
    origin: '*',
  });

  // Add all schemas to the server
  for (const schema of [...countrySchemas, ...deviceSchemas]) {
    server.addSchema(schema);
  }

  server.register(
    FastifySwagger,
    withRefResolver({
      routePrefix: '/swagger',
      swagger: {
        info: {
          title: 'Cloud API',
          description: 'Cloud API',
          version: pjson.version,
        },
      },
    })
  );

  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
  });

  // Register all routes
  server.get('/healthcheck', async (request, reply) => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  server.register(countryRoutes, { prefix: '/v1/country' });
  server.register(deviceRoutes, { prefix: '/v1/device' });

  return server;
}
