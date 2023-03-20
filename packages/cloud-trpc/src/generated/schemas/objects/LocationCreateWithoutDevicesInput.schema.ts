import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { CountryCreateNestedOneWithoutLocationsInputObjectSchema } from './CountryCreateNestedOneWithoutLocationsInput.schema';
import { VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema } from './VisitsToLocationCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateWithoutDevicesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    lat: z.string(),
    long: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    country: z.lazy(() => CountryCreateNestedOneWithoutLocationsInputObjectSchema),
    visits: z
      .lazy(() => VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateWithoutDevicesInputObjectSchema = Schema;
