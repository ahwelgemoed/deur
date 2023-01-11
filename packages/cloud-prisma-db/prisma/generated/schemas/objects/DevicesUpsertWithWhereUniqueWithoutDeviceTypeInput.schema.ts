import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithoutDeviceTypeInputObjectSchema } from './DevicesUpdateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedUpdateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedUpdateWithoutDeviceTypeInput.schema';
import { DevicesCreateWithoutDeviceTypeInputObjectSchema } from './DevicesCreateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateWithoutDeviceTypeInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpsertWithWhereUniqueWithoutDeviceTypeInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DevicesUpdateWithoutDeviceTypeInputObjectSchema),
      z.lazy(() => DevicesUncheckedUpdateWithoutDeviceTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DevicesCreateWithoutDeviceTypeInputObjectSchema),
      z.lazy(() => DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema = Schema;
