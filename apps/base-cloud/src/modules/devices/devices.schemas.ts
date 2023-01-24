import { DeviceTypesCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const cleanDeviceTypeSchema = DeviceTypesCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export const getAllDeviceTypes = z.array(cleanDeviceTypeSchema);

export const { schemas: deviceSchemas, $ref } = buildJsonSchemas(
  {
    getAllDeviceTypes,
  },
  { $id: 'deviceSchemas' }
);
