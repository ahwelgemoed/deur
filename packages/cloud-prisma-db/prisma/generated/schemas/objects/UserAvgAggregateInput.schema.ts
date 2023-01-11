import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
  })
  .strict();

export const UserAvgAggregateInputObjectSchema = Schema;
