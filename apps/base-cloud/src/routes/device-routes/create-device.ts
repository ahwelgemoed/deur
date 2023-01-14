import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function deviceRoutes(fastify: FastifyInstance) {
  fastify.post<{
    Body: {
      deviceId: string;
      name: string;
      locationId: number;
      deviceTypeId: number;
    };
  }>('/create-device', async function (request, reply) {
    try {
      const createdDevice = await prisma.devices.create({
        data: {
          deviceId: request.body.deviceId,
          name: request.body.name,
          locationId: request.body.locationId,
          deviceTypeId: request.body.deviceTypeId,
        },
      });

      return { data: createdDevice, cached: undefined, error: undefined };
    } catch (error) {
      return { data: undefined, cached: undefined, error: error };
    }
  });
}

export default deviceRoutes;

// id           Int         @id @default(autoincrement())
// name         String
// deviceId     String
// locationId   Int
// location     Location    @relation(fields: [locationId], references: [id])
// deviceType   DeviceTypes @relation(fields: [deviceTypeId], references: [id])
// deviceTypeId Int
// createdAt    DateTime    @default(now())
// updatedAt    DateTime    @updatedAt
