import { z } from 'zod';
import { DevicesCreateWithoutDeviceTypeInputObjectSchema } from './DevicesCreateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateWithoutDeviceTypeInput.schema';
import { DevicesCreateOrConnectWithoutDeviceTypeInputObjectSchema } from './DevicesCreateOrConnectWithoutDeviceTypeInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateNestedManyWithoutDeviceTypeInput> = z
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
    connect: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DevicesCreateNestedManyWithoutDeviceTypeInputObjectSchema = Schema;
