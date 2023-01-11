import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountrySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const CountrySumAggregateInputObjectSchema = Schema;
