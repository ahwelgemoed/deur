import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInputObjectSchema } from './DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesUncheckedUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    devices: z
      .lazy(() => DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const DeviceTypesUncheckedUpdateInputObjectSchema = Schema;