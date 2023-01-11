import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { DevicesCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateWithoutCountryInput> = z
  .object({
    name: z.string(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationCreateWithoutCountryInputObjectSchema = Schema;
