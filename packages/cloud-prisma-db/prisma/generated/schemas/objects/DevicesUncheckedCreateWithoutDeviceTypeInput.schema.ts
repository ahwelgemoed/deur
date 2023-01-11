import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUncheckedCreateWithoutDeviceTypeInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    deviceId: z.string(),
    locationId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema = Schema;
