import { FastifyRequest, FastifyReply } from 'fastify';

import { prisma } from '../../server';

export async function getLocationsByCountry(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { countryId } = request.params as { countryId: number };
    // Move to DTO
    const allLocationsByCountry = await prisma.location.findMany({
      where: {
        countryId,
      },
    });
    // const allCountries = await prisma.country.findMany();
    return reply.code(200).send(allLocationsByCountry);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
