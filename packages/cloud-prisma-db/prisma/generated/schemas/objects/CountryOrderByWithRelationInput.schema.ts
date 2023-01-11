import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByRelationAggregateInputObjectSchema } from './LocationOrderByRelationAggregateInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    locations: z.lazy(() => LocationOrderByRelationAggregateInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CountryOrderByWithRelationInputObjectSchema = Schema;
