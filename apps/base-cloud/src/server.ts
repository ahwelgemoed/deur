// import { PrismaClient } from '@deur/cloud-prisma-db';
// import autoload from '@fastify/autoload';
// import cors from '@fastify/cors';
// // import type { FastifySwaggerOptions } from '@fastify/swagger';
// // import type { FastifyRedis } from '@fastify/redis';
// import * as dotenv from 'dotenv';
// import Fastify from 'fastify';
// import path from 'path';

// const PORT = 3030;

// dotenv.config();

// const prisma = new PrismaClient();

// const fastify = Fastify({
//   logger: true,
// });

// fastify.register(cors, {
//   credentials: true,
//   origin: '*',
// });

// // fastify.register(require('@fastify/redis'), { host: '127.0.0.1' });

// fastify.register(require('@fastify/redis'), { host: 'redis', port: 6379 });

// fastify.register(require('@fastify/swagger'), {
//   swagger: {
//     info: {
//       title: 'Test swagger',
//       description: 'testing the fastify swagger api',
//       version: '0.1.0',
//     },
//   },
// });
// fastify.register(require('@fastify/swagger-ui'), {
//   routePrefix: '/swagger',

//   uiConfig: {
//     docExpansion: 'full',
//     deepLinking: false,
//   },
//   uiHooks: {},
//   staticCSP: true,
//   transformSpecificationClone: true,
// });

// fastify.register(autoload, {
//   dir: path.join(__dirname, './routes'),
//   options: { prefix: 'v1' },
// });

// const start = async () => {
//   try {
//     await fastify.ready();
//     await fastify.listen({ port: PORT, host: '0.0.0.0' });
//     // fastify.ready(() => {
//     //   writeFileSync(
//     //     './docs/autogenerated-swagger.json',
//     //     JSON.stringify(fastify.swagger(), null, 1)
//     //   );
//     // });
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// };

// export { prisma, start };

import { PrismaClient } from '@deur/cloud-prisma-db';
import cors from '@fastify/cors';
import FastifySwagger from '@fastify/swagger';
import Fastify, { FastifyInstance } from 'fastify';
import { withRefResolver } from 'fastify-zod';

import countryRoutes from './modules/countries/countries.route';
import { countrySchemas } from './modules/countries/modules';

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
  for (const schema of [...countrySchemas]) {
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

  return server;
}
