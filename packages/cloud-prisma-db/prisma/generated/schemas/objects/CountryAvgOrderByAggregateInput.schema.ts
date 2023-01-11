import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CountryAvgOrderByAggregateInputObjectSchema = Schema;
