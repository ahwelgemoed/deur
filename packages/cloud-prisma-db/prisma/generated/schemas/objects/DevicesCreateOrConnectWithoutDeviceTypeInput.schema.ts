import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesCreateWithoutDeviceTypeInputObjectSchema } from './DevicesCreateWithoutDeviceTypeInput.schema';
import { DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateWithoutDeviceTypeInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesCreateOrConnectWithoutDeviceTypeInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DevicesCreateWithoutDeviceTypeInputObjectSchema),
      z.lazy(() => DevicesUncheckedCreateWithoutDeviceTypeInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesCreateOrConnectWithoutDeviceTypeInputObjectSchema = Schema;
