import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { CountryCreateNestedOneWithoutLocationsInputObjectSchema } from './CountryCreateNestedOneWithoutLocationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateWithoutDevicesInput> = z
  .object({
    name: z.string(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    country: z.lazy(() => CountryCreateNestedOneWithoutLocationsInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationCreateWithoutDevicesInputObjectSchema = Schema;
