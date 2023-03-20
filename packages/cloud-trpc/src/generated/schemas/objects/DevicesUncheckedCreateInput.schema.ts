import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    deviceId: z.string(),
    locationId: z.string(),
    deviceTypeId: z.string(),
    lastOnline: z.date(),
    lastHeartbeat: z.date().optional().nullable(),
    isOnline: z.boolean(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DevicesUncheckedCreateInputObjectSchema = Schema;
