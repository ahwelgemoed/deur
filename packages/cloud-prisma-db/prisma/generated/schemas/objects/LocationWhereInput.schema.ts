import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { DevicesListRelationFilterObjectSchema } from './DevicesListRelationFilter.schema';
import { CountryRelationFilterObjectSchema } from './CountryRelationFilter.schema';
import { CountryWhereInputObjectSchema } from './CountryWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationWhereInputObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    devices: z.lazy(() => DevicesListRelationFilterObjectSchema).optional(),
    countryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    country: z
      .union([
        z.lazy(() => CountryRelationFilterObjectSchema),
        z.lazy(() => CountryWhereInputObjectSchema),
      ])
      .optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  })
  .strict();

export const LocationWhereInputObjectSchema = Schema;
