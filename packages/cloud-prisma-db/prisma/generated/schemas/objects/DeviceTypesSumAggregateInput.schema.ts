import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const DeviceTypesSumAggregateInputObjectSchema = Schema;
