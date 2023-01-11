import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    countryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const LocationScalarWhereInputObjectSchema = Schema;
