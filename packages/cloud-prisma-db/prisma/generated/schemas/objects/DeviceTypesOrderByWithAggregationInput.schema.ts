import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceTypesCountOrderByAggregateInputObjectSchema } from './DeviceTypesCountOrderByAggregateInput.schema';
import { DeviceTypesAvgOrderByAggregateInputObjectSchema } from './DeviceTypesAvgOrderByAggregateInput.schema';
import { DeviceTypesMaxOrderByAggregateInputObjectSchema } from './DeviceTypesMaxOrderByAggregateInput.schema';
import { DeviceTypesMinOrderByAggregateInputObjectSchema } from './DeviceTypesMinOrderByAggregateInput.schema';
import { DeviceTypesSumOrderByAggregateInputObjectSchema } from './DeviceTypesSumOrderByAggregateInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DeviceTypesCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => DeviceTypesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DeviceTypesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DeviceTypesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DeviceTypesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesOrderByWithAggregationInputObjectSchema = Schema;
