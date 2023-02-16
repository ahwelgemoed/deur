import { FastifyRequest, FastifyReply } from 'fastify';

export async function getUsersByLocation(request: FastifyRequest, reply: FastifyReply) {
  // const headers = request.headers;

  try {
    const dummySubscriptions = [
      {
        id: '1',
        name: 'test',
        price: 1,
      },
      {
        id: '2',
        name: 'test2',
        price: 2,
      },
    ];

    return reply.code(200).send(dummySubscriptions);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
