import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutDevicesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    lat: z.string(),
    long: z.string(),
    countryId: z.string(),
    visits: z
      .lazy(() => VisitsToLocationUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutDevicesInputObjectSchema = Schema;
