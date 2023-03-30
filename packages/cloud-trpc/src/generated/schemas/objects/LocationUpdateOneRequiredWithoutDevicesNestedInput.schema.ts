import { z } from 'zod';
import { LocationCreateWithoutDevicesInputObjectSchema } from './LocationCreateWithoutDevicesInput.schema';
import { LocationUncheckedCreateWithoutDevicesInputObjectSchema } from './LocationUncheckedCreateWithoutDevicesInput.schema';
import { LocationCreateOrConnectWithoutDevicesInputObjectSchema } from './LocationCreateOrConnectWithoutDevicesInput.schema';
import { LocationUpsertWithoutDevicesInputObjectSchema } from './LocationUpsertWithoutDevicesInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutDevicesInputObjectSchema } from './LocationUpdateWithoutDevicesInput.schema';
import { LocationUncheckedUpdateWithoutDevicesInputObjectSchema } from './LocationUncheckedUpdateWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutDevicesNestedInput> = z
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
    upsert: z.lazy(() => LocationUpsertWithoutDevicesInputObjectSchema).optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LocationUpdateWithoutDevicesInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutDevicesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationUpdateOneRequiredWithoutDevicesNestedInputObjectSchema = Schema;
