import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { VisitsToLocationOrderByRelationAggregateInputObjectSchema } from './VisitsToLocationOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    birthDay: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    cardNumber: z.lazy(() => SortOrderSchema).optional(),
    isAllowed: z.lazy(() => SortOrderSchema).optional(),
    memberShipType: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
    visits: z.lazy(() => VisitsToLocationOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
