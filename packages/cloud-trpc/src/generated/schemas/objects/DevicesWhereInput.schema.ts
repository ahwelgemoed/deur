import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { DeviceTypesRelationFilterObjectSchema } from './DeviceTypesRelationFilter.schema';
import { DeviceTypesWhereInputObjectSchema } from './DeviceTypesWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DevicesWhereInputObjectSchema),
        z.lazy(() => DevicesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DevicesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DevicesWhereInputObjectSchema),
        z.lazy(() => DevicesWhereInputObjectSchema).array(),
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
    location: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional(),
    deviceType: z
      .union([
        z.lazy(() => DeviceTypesRelationFilterObjectSchema),
        z.lazy(() => DeviceTypesWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DevicesWhereInputObjectSchema = Schema;
