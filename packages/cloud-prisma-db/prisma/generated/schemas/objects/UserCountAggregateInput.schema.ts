import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    birthDay: z.literal(true).optional(),
    name: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    cardNumber: z.literal(true).optional(),
    isAllowed: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;
