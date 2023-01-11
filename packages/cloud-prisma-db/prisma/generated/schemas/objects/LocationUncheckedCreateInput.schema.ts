import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLocationInput.schema';
import { DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
    countryId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationUncheckedCreateInputObjectSchema = Schema;
