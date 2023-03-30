import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DevicesCountOrderByAggregateInputObjectSchema } from './DevicesCountOrderByAggregateInput.schema';
import { DevicesMaxOrderByAggregateInputObjectSchema } from './DevicesMaxOrderByAggregateInput.schema';
import { DevicesMinOrderByAggregateInputObjectSchema } from './DevicesMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    deviceId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
    lastOnline: z.lazy(() => SortOrderSchema).optional(),
    lastHeartbeat: z.lazy(() => SortOrderSchema).optional(),
    isOnline: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DevicesCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DevicesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DevicesMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DevicesOrderByWithAggregationInputObjectSchema = Schema;
