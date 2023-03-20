import { z } from 'zod';
import { LocationCreateNestedOneWithoutDevicesInputObjectSchema } from './LocationCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateWithoutDeviceTypeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    deviceId: z.string(),
    lastOnline: z.date(),
    lastHeartbeat: z.date().optional().nullable(),
    isOnline: z.boolean(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    location: z.lazy(() => LocationCreateNestedOneWithoutDevicesInputObjectSchema),
  })
  .strict();

export const DevicesCreateWithoutDeviceTypeInputObjectSchema = Schema;
