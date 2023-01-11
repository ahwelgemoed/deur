import { z } from 'zod';
import { DevicesCreateWithoutLocationInputObjectSchema } from './DevicesCreateWithoutLocationInput.schema';
import { DevicesUncheckedCreateWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateWithoutLocationInput.schema';
import { DevicesCreateOrConnectWithoutLocationInputObjectSchema } from './DevicesCreateOrConnectWithoutLocationInput.schema';
import { DevicesUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './DevicesUpsertWithWhereUniqueWithoutLocationInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './DevicesUpdateWithWhereUniqueWithoutLocationInput.schema';
import { DevicesUpdateManyWithWhereWithoutLocationInputObjectSchema } from './DevicesUpdateManyWithWhereWithoutLocationInput.schema';
import { DevicesScalarWhereInputObjectSchema } from './DevicesScalarWhereInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUncheckedUpdateManyWithoutLocationNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema).array(),
        z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DevicesCreateOrConnectWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesCreateOrConnectWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DevicesUpsertWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => DevicesUpdateWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DevicesUpdateManyWithWhereWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesUpdateManyWithWhereWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DevicesScalarWhereInputObjectSchema),
        z.lazy(() => DevicesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DevicesUncheckedUpdateManyWithoutLocationNestedInputObjectSchema = Schema;
