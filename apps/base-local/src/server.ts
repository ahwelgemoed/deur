import Fastify, { FastifyInstance } from 'fastify';
import FastifySwagger from '@fastify/swagger';
import { withRefResolver } from 'fastify-zod';
import gateRoutes from './modules/gate/gate.route';
import { gateLocalSchemas } from './modules/gate/gate.schema';
// Get away from RootDir in TSConfig
const pjson = require('../package.json');

export function bootstrap(): FastifyInstance {
  const server = Fastify();

  server.get('/healthcheck', async (request, reply) => {
    return { status: 'OK', version: pjson.version, uptime: process.uptime() };
  });

  // Add all schemas to the server
  for (const schema of [...gateLocalSchemas]) {
    server.addSchema(schema);
  }

  server.register(
    FastifySwagger,
    withRefResolver({
      exposeRoute: true,
      staticCSP: true,
      openapi: {
        info: {
          title: 'Local',
          description: '@deur Local api',
          version: pjson.version,
        },
      },
    })
  );

  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
  });

  // Register all routes
  server.register(gateRoutes, { prefix: '/gate' });

  return server;
}
