import { z } from 'zod';
import { CountryWhereInputObjectSchema } from './CountryWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryRelationFilter> = z
  .object({
    is: z.lazy(() => CountryWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CountryWhereInputObjectSchema).optional(),
  })
  .strict();

export const CountryRelationFilterObjectSchema = Schema;
