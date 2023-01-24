import { FastifyRequest, FastifyReply } from 'fastify';

import { prisma } from '../../server';
// import { UserAllowedCheckRequest } from './countries.schema';

export async function getAllCountries(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Move to DTO
    const allCountries = await prisma.country.findMany();
    return reply.code(200).send(allCountries);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
