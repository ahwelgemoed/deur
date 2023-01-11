import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUncheckedCreateWithoutLocationInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    deviceId: z.string(),
    deviceTypeId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesUncheckedCreateWithoutLocationInputObjectSchema = Schema;
