import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    countryId: z.literal(true).optional(),
  })
  .strict();

export const LocationAvgAggregateInputObjectSchema = Schema;
