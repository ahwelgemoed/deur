import { z } from 'zod';
import { DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    lat: z.string(),
    long: z.string(),
    countryId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    visits: z
      .lazy(() => VisitsToLocationUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutUsersInputObjectSchema = Schema;
