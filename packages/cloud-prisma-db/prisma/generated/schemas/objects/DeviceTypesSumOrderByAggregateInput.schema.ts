import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DeviceTypesSumOrderByAggregateInputObjectSchema = Schema;
