import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { DevicesCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesCreateNestedManyWithoutLocationInput.schema';
import { CountryCreateNestedOneWithoutLocationsInputObjectSchema } from './CountryCreateNestedOneWithoutLocationsInput.schema';
import { VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema } from './VisitsToLocationCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    lat: z.string(),
    long: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    country: z.lazy(() => CountryCreateNestedOneWithoutLocationsInputObjectSchema),
    visits: z
      .lazy(() => VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;
