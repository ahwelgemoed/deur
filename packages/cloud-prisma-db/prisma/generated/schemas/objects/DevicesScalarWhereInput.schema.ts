import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DevicesScalarWhereInputObjectSchema),
        z.lazy(() => DevicesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DevicesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DevicesScalarWhereInputObjectSchema),
        z.lazy(() => DevicesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    deviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    locationId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    deviceTypeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const DevicesScalarWhereInputObjectSchema = Schema;
