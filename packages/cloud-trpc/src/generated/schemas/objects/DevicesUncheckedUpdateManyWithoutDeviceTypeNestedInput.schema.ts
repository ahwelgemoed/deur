import { z } from 'zod';
import { DevicesCreateWithoutDeviceTypeInputObjectSchema } from './DevicesCreateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateWithoutDeviceTypeInput.schema';
import { DevicesCreateOrConnectWithoutDeviceTypeInputObjectSchema } from './DevicesCreateOrConnectWithoutDeviceTypeInput.schema';
import { DevicesUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema } from './DevicesUpsertWithWhereUniqueWithoutDeviceTypeInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema } from './DevicesUpdateWithWhereUniqueWithoutDeviceTypeInput.schema';
import { DevicesUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema } from './DevicesUpdateManyWithWhereWithoutDeviceTypeInput.schema';
import { DevicesScalarWhereInputObjectSchema } from './DevicesScalarWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DevicesCreateWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesCreateWithoutDeviceTypeInputObjectSchema).array(),
        z.lazy(() => DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DevicesCreateOrConnectWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesCreateOrConnectWithoutDeviceTypeInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DevicesUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema).array(),
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
        z.lazy(() => DevicesUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DevicesUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema),
        z.lazy(() => DevicesUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema).array(),
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

export const DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInputObjectSchema = Schema;
