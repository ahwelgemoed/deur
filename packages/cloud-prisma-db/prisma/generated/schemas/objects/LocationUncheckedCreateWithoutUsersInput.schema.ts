import { z } from 'zod';
import { DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    countryId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutUsersInputObjectSchema = Schema;
