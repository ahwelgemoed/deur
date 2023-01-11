import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { DevicesOrderByRelationAggregateInputObjectSchema } from './DevicesOrderByRelationAggregateInput.schema';
import { CountryOrderByWithRelationInputObjectSchema } from './CountryOrderByWithRelationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesOrderByRelationAggregateInputObjectSchema).optional(),
    countryId: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => CountryOrderByWithRelationInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LocationOrderByWithRelationInputObjectSchema = Schema;
