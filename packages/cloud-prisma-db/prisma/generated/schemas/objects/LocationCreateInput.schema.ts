import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { DevicesCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesCreateNestedManyWithoutLocationInput.schema';
import { CountryCreateNestedOneWithoutLocationsInputObjectSchema } from './CountryCreateNestedOneWithoutLocationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    name: z.string(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    country: z.lazy(() => CountryCreateNestedOneWithoutLocationsInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;
