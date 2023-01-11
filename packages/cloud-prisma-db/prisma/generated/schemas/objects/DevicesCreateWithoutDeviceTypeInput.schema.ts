import { z } from 'zod';
import { LocationCreateNestedOneWithoutDevicesInputObjectSchema } from './LocationCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesCreateWithoutDeviceTypeInput> = z
  .object({
    name: z.string(),
    deviceId: z.string(),
    location: z.lazy(() => LocationCreateNestedOneWithoutDevicesInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesCreateWithoutDeviceTypeInputObjectSchema = Schema;
