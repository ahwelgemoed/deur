import { z } from 'zod';
import { VisitsToLocationWhereInputObjectSchema } from './VisitsToLocationWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationListRelationFilter> = z
  .object({
    every: z.lazy(() => VisitsToLocationWhereInputObjectSchema).optional(),
    some: z.lazy(() => VisitsToLocationWhereInputObjectSchema).optional(),
    none: z.lazy(() => VisitsToLocationWhereInputObjectSchema).optional(),
  })
  .strict();

export const VisitsToLocationListRelationFilterObjectSchema = Schema;
