import { z } from 'zod';
import { DeviceTypesCreateWithoutDevicesInputObjectSchema } from './DeviceTypesCreateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedCreateWithoutDevicesInput.schema';
import { DeviceTypesCreateOrConnectWithoutDevicesInputObjectSchema } from './DeviceTypesCreateOrConnectWithoutDevicesInput.schema';
import { DeviceTypesUpsertWithoutDevicesInputObjectSchema } from './DeviceTypesUpsertWithoutDevicesInput.schema';
import { DeviceTypesWhereUniqueInputObjectSchema } from './DeviceTypesWhereUniqueInput.schema';
import { DeviceTypesUpdateWithoutDevicesInputObjectSchema } from './DeviceTypesUpdateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedUpdateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedUpdateWithoutDevicesInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput> = z
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
    upsert: z.lazy(() => DeviceTypesUpsertWithoutDevicesInputObjectSchema).optional(),
    connect: z.lazy(() => DeviceTypesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DeviceTypesUpdateWithoutDevicesInputObjectSchema),
        z.lazy(() => DeviceTypesUncheckedUpdateWithoutDevicesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DeviceTypesUpdateOneRequiredWithoutDevicesNestedInputObjectSchema = Schema;
