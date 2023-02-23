import { z } from 'zod';
import { DeviceTypesUpdateWithoutDevicesInputObjectSchema } from './DeviceTypesUpdateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedUpdateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedUpdateWithoutDevicesInput.schema';
import { DeviceTypesCreateWithoutDevicesInputObjectSchema } from './DeviceTypesCreateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedCreateWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesUpsertWithoutDevicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DeviceTypesUpdateWithoutDevicesInputObjectSchema),
      z.lazy(() => DeviceTypesUncheckedUpdateWithoutDevicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DeviceTypesCreateWithoutDevicesInputObjectSchema),
      z.lazy(() => DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema),
    ]),
  })
  .strict();

export const DeviceTypesUpsertWithoutDevicesInputObjectSchema = Schema;
