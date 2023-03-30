import { z } from 'zod';
import { DeviceTypesWhereUniqueInputObjectSchema } from './DeviceTypesWhereUniqueInput.schema';
import { DeviceTypesCreateWithoutDevicesInputObjectSchema } from './DeviceTypesCreateWithoutDevicesInput.schema';
import { DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema } from './DeviceTypesUncheckedCreateWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesCreateOrConnectWithoutDevicesInput> = z
  .object({
    where: z.lazy(() => DeviceTypesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DeviceTypesCreateWithoutDevicesInputObjectSchema),
      z.lazy(() => DeviceTypesUncheckedCreateWithoutDevicesInputObjectSchema),
    ]),
  })
  .strict();

export const DeviceTypesCreateOrConnectWithoutDevicesInputObjectSchema = Schema;
