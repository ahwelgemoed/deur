import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLocationInput.schema';
import { DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutVisitsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    lat: z.string(),
    long: z.string(),
    countryId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutVisitsInputObjectSchema = Schema;
