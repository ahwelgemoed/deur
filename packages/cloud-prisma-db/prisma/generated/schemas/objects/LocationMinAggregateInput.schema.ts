import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    countryId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const LocationMinAggregateInputObjectSchema = Schema;
