import { z } from 'zod';
import { LocationUpdateWithoutDevicesInputObjectSchema } from './LocationUpdateWithoutDevicesInput.schema';
import { LocationUncheckedUpdateWithoutDevicesInputObjectSchema } from './LocationUncheckedUpdateWithoutDevicesInput.schema';
import { LocationCreateWithoutDevicesInputObjectSchema } from './LocationCreateWithoutDevicesInput.schema';
import { LocationUncheckedCreateWithoutDevicesInputObjectSchema } from './LocationUncheckedCreateWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutDevicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutDevicesInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutDevicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutDevicesInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutDevicesInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutDevicesInputObjectSchema = Schema;
