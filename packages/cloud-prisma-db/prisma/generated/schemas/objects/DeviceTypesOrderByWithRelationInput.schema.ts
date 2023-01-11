import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DevicesOrderByRelationAggregateInputObjectSchema } from './DevicesOrderByRelationAggregateInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    devices: z.lazy(() => DevicesOrderByRelationAggregateInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DeviceTypesOrderByWithRelationInputObjectSchema = Schema;
