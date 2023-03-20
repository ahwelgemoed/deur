import { z } from 'zod';
import { DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DevicesUncheckedCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    devices: z
      .lazy(() => DevicesUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTypesUncheckedCreateInputObjectSchema = Schema;
