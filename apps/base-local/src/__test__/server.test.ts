import { test } from 'tap';
import { bootstrap } from '../server';

test('should respond with 200 on healthcheck', async (t) => {
  const fastify = bootstrap();

  t.teardown(() => fastify.close());

  const response = await fastify.inject({
    method: 'GET',
    url: '/healthcheck',
  });

  t.equal(response.statusCode, 200);
  t.same(response.json(), { status: 'OK' });
});
