import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const CountryScalarWhereWithAggregatesInputObjectSchema = Schema;
