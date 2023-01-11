import { z } from 'zod';
import { DevicesCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DevicesCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesCreateInput> = z
  .object({
    name: z.string(),
    devices: z.lazy(() => DevicesCreateNestedManyWithoutDeviceTypeInputObjectSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DeviceTypesCreateInputObjectSchema = Schema;
