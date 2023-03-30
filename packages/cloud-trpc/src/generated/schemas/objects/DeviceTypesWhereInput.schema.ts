import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DevicesListRelationFilterObjectSchema } from './DevicesListRelationFilter.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DeviceTypesWhereInputObjectSchema),
        z.lazy(() => DeviceTypesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DeviceTypesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DeviceTypesWhereInputObjectSchema),
        z.lazy(() => DeviceTypesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    devices: z.lazy(() => DevicesListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesWhereInputObjectSchema = Schema;
