import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CountryCountOrderByAggregateInputObjectSchema } from './CountryCountOrderByAggregateInput.schema';
import { CountryAvgOrderByAggregateInputObjectSchema } from './CountryAvgOrderByAggregateInput.schema';
import { CountryMaxOrderByAggregateInputObjectSchema } from './CountryMaxOrderByAggregateInput.schema';
import { CountryMinOrderByAggregateInputObjectSchema } from './CountryMinOrderByAggregateInput.schema';
import { CountrySumOrderByAggregateInputObjectSchema } from './CountrySumOrderByAggregateInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => CountryCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => CountryAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CountryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CountryMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CountrySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CountryOrderByWithAggregationInputObjectSchema = Schema;
