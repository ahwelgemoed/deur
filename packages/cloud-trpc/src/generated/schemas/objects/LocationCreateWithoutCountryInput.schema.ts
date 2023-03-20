import { z } from 'zod';
import { UserCreateNestedManyWithoutLocationInputObjectSchema } from './UserCreateNestedManyWithoutLocationInput.schema';
import { DevicesCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesCreateNestedManyWithoutLocationInput.schema';
import { VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema } from './VisitsToLocationCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateWithoutCountryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    lat: z.string(),
    long: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    users: z.lazy(() => UserCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    visits: z
      .lazy(() => VisitsToLocationCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateWithoutCountryInputObjectSchema = Schema;
