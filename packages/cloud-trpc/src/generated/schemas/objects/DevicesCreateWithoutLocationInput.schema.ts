import { z } from 'zod';
import { DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema } from './DeviceTypesCreateNestedOneWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateWithoutLocationInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    deviceId: z.string(),
    lastOnline: z.date(),
    lastHeartbeat: z.date().optional().nullable(),
    isOnline: z.boolean(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    deviceType: z.lazy(() => DeviceTypesCreateNestedOneWithoutDevicesInputObjectSchema),
  })
  .strict();

export const DevicesCreateWithoutLocationInputObjectSchema = Schema;
