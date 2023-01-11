import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    birthDay: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    locationId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    cardNumber: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    isAllowed: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const UserScalarWhereWithAggregatesInputObjectSchema = Schema;
