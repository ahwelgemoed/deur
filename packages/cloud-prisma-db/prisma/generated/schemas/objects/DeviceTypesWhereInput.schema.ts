import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DevicesListRelationFilterObjectSchema } from './DevicesListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../..';

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
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    devices: z.lazy(() => DevicesListRelationFilterObjectSchema).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const DeviceTypesWhereInputObjectSchema = Schema;
