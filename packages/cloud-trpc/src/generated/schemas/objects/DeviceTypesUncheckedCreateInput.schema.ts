import { z } from 'zod';
import { DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const DeviceTypesUncheckedCreateInputObjectSchema = Schema;
