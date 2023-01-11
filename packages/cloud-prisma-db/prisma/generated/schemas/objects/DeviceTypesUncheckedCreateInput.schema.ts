import { z } from 'zod';
import { DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DeviceTypesUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DeviceTypesUncheckedCreateInputObjectSchema = Schema;
