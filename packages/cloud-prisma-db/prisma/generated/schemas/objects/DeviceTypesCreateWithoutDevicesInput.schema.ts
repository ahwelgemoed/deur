import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesCreateWithoutDevicesInput> = z
  .object({
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DeviceTypesCreateWithoutDevicesInputObjectSchema = Schema;
