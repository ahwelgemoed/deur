import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithoutDeviceTypeInputObjectSchema } from './DevicesUpdateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedUpdateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedUpdateWithoutDeviceTypeInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpdateWithWhereUniqueWithoutDeviceTypeInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DevicesUpdateWithoutDeviceTypeInputObjectSchema),
      z.lazy(() => DevicesUncheckedUpdateWithoutDeviceTypeInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema = Schema;
