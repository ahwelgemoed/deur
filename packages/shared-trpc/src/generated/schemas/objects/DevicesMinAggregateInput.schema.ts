import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    deviceId: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    deviceTypeId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const DevicesMinAggregateInputObjectSchema = Schema;
