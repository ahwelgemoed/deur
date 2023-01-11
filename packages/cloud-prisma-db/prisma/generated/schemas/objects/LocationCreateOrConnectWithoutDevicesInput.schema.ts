import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutDevicesInputObjectSchema } from './LocationCreateWithoutDevicesInput.schema';
import { LocationUncheckedCreateWithoutDevicesInputObjectSchema } from './LocationUncheckedCreateWithoutDevicesInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutDevicesInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutDevicesInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutDevicesInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutDevicesInputObjectSchema = Schema;
