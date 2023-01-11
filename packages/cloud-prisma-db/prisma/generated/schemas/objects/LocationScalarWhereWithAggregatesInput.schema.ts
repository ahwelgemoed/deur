import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => LocationScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    countryId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const LocationScalarWhereWithAggregatesInputObjectSchema = Schema;
