import { z } from 'zod';
import { LocationCreateWithoutCountryInputObjectSchema } from './LocationCreateWithoutCountryInput.schema';
import { LocationUncheckedCreateWithoutCountryInputObjectSchema } from './LocationUncheckedCreateWithoutCountryInput.schema';
import { LocationCreateOrConnectWithoutCountryInputObjectSchema } from './LocationCreateOrConnectWithoutCountryInput.schema';
import { LocationUpsertWithWhereUniqueWithoutCountryInputObjectSchema } from './LocationUpsertWithWhereUniqueWithoutCountryInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithWhereUniqueWithoutCountryInputObjectSchema } from './LocationUpdateWithWhereUniqueWithoutCountryInput.schema';
import { LocationUpdateManyWithWhereWithoutCountryInputObjectSchema } from './LocationUpdateManyWithWhereWithoutCountryInput.schema';
import { LocationScalarWhereInputObjectSchema } from './LocationScalarWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateManyWithoutCountryNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => LocationUpsertWithWhereUniqueWithoutCountryInputObjectSchema),
        z.lazy(() => LocationUpsertWithWhereUniqueWithoutCountryInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => LocationWhereUniqueInputObjectSchema),
        z.lazy(() => LocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => LocationUpdateWithWhereUniqueWithoutCountryInputObjectSchema),
        z.lazy(() => LocationUpdateWithWhereUniqueWithoutCountryInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LocationUpdateManyWithWhereWithoutCountryInputObjectSchema),
        z.lazy(() => LocationUpdateManyWithWhereWithoutCountryInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => LocationScalarWhereInputObjectSchema),
        z.lazy(() => LocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LocationUncheckedUpdateManyWithoutCountryNestedInputObjectSchema = Schema;
