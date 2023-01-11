import { z } from 'zod';
import { DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema } from './DeviceTypesCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesCreateWithoutLocationInput> = z
  .object({
    name: z.string(),
    deviceId: z.string(),
    deviceType: z.lazy(() => DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesCreateWithoutLocationInputObjectSchema = Schema;
