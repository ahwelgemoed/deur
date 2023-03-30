import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceTypesCountOrderByAggregateInputObjectSchema } from './DeviceTypesCountOrderByAggregateInput.schema';
import { DeviceTypesMaxOrderByAggregateInputObjectSchema } from './DeviceTypesMaxOrderByAggregateInput.schema';
import { DeviceTypesMinOrderByAggregateInputObjectSchema } from './DeviceTypesMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DeviceTypesCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DeviceTypesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DeviceTypesMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesOrderByWithAggregationInputObjectSchema = Schema;
