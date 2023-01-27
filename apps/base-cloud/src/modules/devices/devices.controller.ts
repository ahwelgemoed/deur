import { FastifyRequest, FastifyReply } from 'fastify';
import { CompleteDevice } from './devices.schemas';
import { prisma } from '../../server';


export async function getAllDeviceTypes(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Move to DTO
    const allDeviceTypes = await prisma.deviceTypes.findMany();
    return reply.code(200).send(allDeviceTypes);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}

export async function createDevice(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Move to DTO
    const device = request.body as CompleteDevice;

    console.log('device', device);

    const createdDevice = await prisma.devices.create({
      data: {
        deviceId: device.deviceId,
        name: device.name,
        locationId: device.locationId,
        deviceTypeId: device.deviceTypeId,
      },
    });

    return reply.code(200).send(createdDevice);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
