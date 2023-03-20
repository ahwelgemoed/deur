import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

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
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    deviceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    deviceTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    lastOnline: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    lastHeartbeat: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    isOnline: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const DevicesScalarWhereInputObjectSchema = Schema;
