import { z } from 'zod';
import { DeviceTypesCreateWithoutDevicesInputObjectSchema } from './DeviceTypesCreateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedCreateWithoutDevicesInput.schema';
import { DeviceTypesCreateOrConnectWithoutDevicesInputObjectSchema } from './DeviceTypesCreateOrConnectWithoutDevicesInput.schema';
import { DeviceTypesWhereUniqueInputObjectSchema } from './DeviceTypesWhereUniqueInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesCreateNestedOneWithoutDevicesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DeviceTypesCreateWithoutDevicesInputObjectSchema),
        z.lazy(() => DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DeviceTypesCreateOrConnectWithoutDevicesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DeviceTypesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema = Schema;
