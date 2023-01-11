import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const DeviceTypesAvgAggregateInputObjectSchema = Schema;
