import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { DeviceTypesRelationFilterObjectSchema } from './DeviceTypesRelationFilter.schema';
import { DeviceTypesWhereInputObjectSchema } from './DeviceTypesWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

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
    deviceTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const DevicesWhereInputObjectSchema = Schema;
