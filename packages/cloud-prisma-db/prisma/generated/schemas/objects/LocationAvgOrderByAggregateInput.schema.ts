import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    countryId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LocationAvgOrderByAggregateInputObjectSchema = Schema;
