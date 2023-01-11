import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DevicesAvgOrderByAggregateInputObjectSchema = Schema;
