import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    deviceId: z.literal(true).optional(),
    locationId: z.literal(true).optional(),
    deviceTypeId: z.literal(true).optional(),
    lastOnline: z.literal(true).optional(),
    lastHeartbeat: z.literal(true).optional(),
    isOnline: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const DevicesMaxAggregateInputObjectSchema = Schema;
