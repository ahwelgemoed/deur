import { DevicesCloudModel, DeviceTypesCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const cleanDeviceTypeSchema = DeviceTypesCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});
export const cleanDeviceSchema = DevicesCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export const createDeviceBody = DevicesCloudModel.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export interface CompleteDevice extends z.infer<typeof cleanDeviceSchema> {}

export const getAllDeviceTypes = z.array(cleanDeviceTypeSchema);

export const { schemas: deviceSchemas, $ref } = buildJsonSchemas(
  {
    deviceResponse: cleanDeviceTypeSchema,
    getAllDeviceTypes,
    cleanDeviceSchema,
    createDeviceBody,
  },
  { $id: 'deviceSchemas' }
);
