import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DevicesCountOrderByAggregateInputObjectSchema } from './DevicesCountOrderByAggregateInput.schema';
import { DevicesAvgOrderByAggregateInputObjectSchema } from './DevicesAvgOrderByAggregateInput.schema';
import { DevicesMaxOrderByAggregateInputObjectSchema } from './DevicesMaxOrderByAggregateInput.schema';
import { DevicesMinOrderByAggregateInputObjectSchema } from './DevicesMinOrderByAggregateInput.schema';
import { DevicesSumOrderByAggregateInputObjectSchema } from './DevicesSumOrderByAggregateInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    deviceId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DevicesCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => DevicesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DevicesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DevicesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DevicesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DevicesOrderByWithAggregationInputObjectSchema = Schema;
