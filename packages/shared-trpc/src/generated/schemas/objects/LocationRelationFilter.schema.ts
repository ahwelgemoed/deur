import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationRelationFilter> = z
  .object({
    is: z.lazy(() => LocationWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  })
  .strict();

export const LocationRelationFilterObjectSchema = Schema;
