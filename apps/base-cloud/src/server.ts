import { PrismaClient } from '@deur/cloud-prisma-db';
import { mainCloudRouter } from '@deur/shared-trpc';
import { cloudCreateContext } from '@deur/shared-trpc/src/trpc/context/cloudServerContext';
import cors from '@fastify/cors';
import FastifySwagger from '@fastify/swagger';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import Fastify, { FastifyInstance } from 'fastify';
import { withRefResolver } from 'fastify-zod';

import countryRoutes from './modules/countries/countries.route';
import { countrySchemas } from './modules/countries/countries.schemas';
import deviceRoutes from './modules/devices/devices.route';
import { deviceSchemas } from './modules/devices/devices.schemas';
import locationRoutes from './modules/locations/locations.route';
import { locationSchemas } from './modules/locations/locations.schemas';
import subscriptionRoutes from './modules/subscriptions/subscriptions.route';
import { subscriptionSchemas } from './modules/subscriptions/subscriptions.schemas';
import userRoutes from './modules/users/users.route';
import { userSchemas } from './modules/users/users.schemas';
import visitRoutes from './modules/visits/visits.route';
import { visitSchemas } from './modules/visits/visits.schemas';

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
  for (const schema of [
    ...userSchemas,
    ...visitSchemas,
    ...deviceSchemas,
    ...countrySchemas,
    ...locationSchemas,
    ...subscriptionSchemas,
  ]) {
    server.addSchema(schema);
  }

  server.register(
    FastifySwagger,
    withRefResolver({
      exposeRoute: true,
      staticCSP: true,
      openapi: {
        info: {
          title: 'Cloud',
          description: '@deur Cloud api',
          version: pjson.version,
        },
      },
    })
  );

  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
  });

  // Register all routes
  server.get('/healthcheck', async () => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: mainCloudRouter, createContext: cloudCreateContext },
  });

  server.register(locationRoutes, { prefix: '/v1/location' });
  server.register(userRoutes, { prefix: '/v1/user' });
  server.register(countryRoutes, { prefix: '/v1/country' });
  server.register(deviceRoutes, { prefix: '/v1/device' });
  server.register(visitRoutes, { prefix: '/v1/visit' });
  server.register(subscriptionRoutes, { prefix: '/v1/subscription' });

  return server;
}
