import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationListRelationFilter> = z
  .object({
    every: z.lazy(() => LocationWhereInputObjectSchema).optional(),
    some: z.lazy(() => LocationWhereInputObjectSchema).optional(),
    none: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  })
  .strict();

export const LocationListRelationFilterObjectSchema = Schema;
