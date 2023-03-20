import { z } from 'zod';
import { DevicesCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DevicesCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutDeviceTypeInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesCreateInputObjectSchema = Schema;
