import { z } from 'zod';
import { DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema } from './DeviceTypesCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateWithoutLocationInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    deviceId: z.string(),
    deviceType: z.lazy(() => DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesCreateWithoutLocationInputObjectSchema = Schema;
