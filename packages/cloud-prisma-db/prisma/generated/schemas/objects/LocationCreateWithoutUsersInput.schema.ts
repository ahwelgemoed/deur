import { z } from 'zod';
import { DevicesCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesCreateNestedManyWithoutLocationInput.schema';
import { CountryCreateNestedOneWithoutLocationsInputObjectSchema } from './CountryCreateNestedOneWithoutLocationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    country: z.lazy(() => CountryCreateNestedOneWithoutLocationsInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationCreateWithoutUsersInputObjectSchema = Schema;
