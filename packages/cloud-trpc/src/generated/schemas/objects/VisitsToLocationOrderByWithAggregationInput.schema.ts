import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VisitsToLocationCountOrderByAggregateInputObjectSchema } from './VisitsToLocationCountOrderByAggregateInput.schema';
import { VisitsToLocationMaxOrderByAggregateInputObjectSchema } from './VisitsToLocationMaxOrderByAggregateInput.schema';
import { VisitsToLocationMinOrderByAggregateInputObjectSchema } from './VisitsToLocationMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VisitsToLocationCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VisitsToLocationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VisitsToLocationMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VisitsToLocationOrderByWithAggregationInputObjectSchema = Schema;
