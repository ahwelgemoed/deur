import { z } from 'zod';
import { LocationCreateNestedOneWithoutDevicesInputObjectSchema } from './LocationCreateNestedOneWithoutDevicesInput.schema';
import { DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema } from './DeviceTypesCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    deviceId: z.string(),
    location: z.lazy(() => LocationCreateNestedOneWithoutDevicesInputObjectSchema),
    deviceType: z.lazy(() => DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesCreateInputObjectSchema = Schema;
