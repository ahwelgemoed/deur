import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    deviceTypeId: z.literal(true).optional(),
  })
  .strict();

export const DevicesSumAggregateInputObjectSchema = Schema;
