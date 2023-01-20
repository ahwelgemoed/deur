import Fastify from 'fastify';
import FastifySwagger from '@fastify/swagger';
import { withRefResolver } from 'fastify-zod';
import gateRoutes from './modules/gate/gate.route';
import { gateLocalSchemas } from './modules/gate/gate.schema';
import { version } from '../package.json';

gateLocalSchemas;

const server = Fastify();

server.get('/healthcheck', async (request, reply) => {
  return { status: 'OK' };
});

async function main() {
  // Add all schemas to the server
  for (const schema of [...gateLocalSchemas]) {
    server.addSchema(schema);
  }

  server.register(
    FastifySwagger,
    withRefResolver({
      routePrefix: '/swagger',
      swagger: {
        info: {
          title: 'Gate API',
          description: 'Gate API',
          version: version,
        },
      },
    })
  );
  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/swagger',
  });

  // Register all routes
  server.register(gateRoutes, { prefix: '/gate' });
  try {
    await server.listen({ port: Number('3034'), host: '0.0.0.0' });
    console.log('🚀 Server listening on port 3034');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

main();
