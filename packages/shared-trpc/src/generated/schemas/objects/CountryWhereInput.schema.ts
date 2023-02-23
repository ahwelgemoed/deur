import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocationListRelationFilterObjectSchema } from './LocationListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CountryWhereInputObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CountryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CountryWhereInputObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    locations: z.lazy(() => LocationListRelationFilterObjectSchema).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const CountryWhereInputObjectSchema = Schema;
