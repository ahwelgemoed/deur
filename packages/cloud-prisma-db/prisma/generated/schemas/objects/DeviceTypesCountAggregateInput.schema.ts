import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DeviceTypesCountAggregateInputObjectSchema = Schema;
