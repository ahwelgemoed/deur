import { z } from 'zod';
import { LocationCreateWithoutDevicesInputObjectSchema } from './LocationCreateWithoutDevicesInput.schema';
import { LocationUncheckedCreateWithoutDevicesInputObjectSchema } from './LocationUncheckedCreateWithoutDevicesInput.schema';
import { LocationCreateOrConnectWithoutDevicesInputObjectSchema } from './LocationCreateOrConnectWithoutDevicesInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutDevicesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutDevicesInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutDevicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => LocationCreateOrConnectWithoutDevicesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutDevicesInputObjectSchema = Schema;
