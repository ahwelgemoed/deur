import { z } from 'zod';
import { LocationCreateWithoutCountryInputObjectSchema } from './LocationCreateWithoutCountryInput.schema';
import { LocationUncheckedCreateWithoutCountryInputObjectSchema } from './LocationUncheckedCreateWithoutCountryInput.schema';
import { LocationCreateOrConnectWithoutCountryInputObjectSchema } from './LocationCreateOrConnectWithoutCountryInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateNestedManyWithoutCountryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutCountryInputObjectSchema),
        z.lazy(() => LocationCreateWithoutCountryInputObjectSchema).array(),
        z.lazy(() => LocationUncheckedCreateWithoutCountryInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutCountryInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LocationCreateOrConnectWithoutCountryInputObjectSchema),
        z.lazy(() => LocationCreateOrConnectWithoutCountryInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LocationCreateNestedManyWithoutCountryInputObjectSchema = Schema;
