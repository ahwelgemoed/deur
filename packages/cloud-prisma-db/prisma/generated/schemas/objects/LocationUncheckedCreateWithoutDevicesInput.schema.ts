import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateWithoutDevicesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
    countryId: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const LocationUncheckedCreateWithoutDevicesInputObjectSchema = Schema;
