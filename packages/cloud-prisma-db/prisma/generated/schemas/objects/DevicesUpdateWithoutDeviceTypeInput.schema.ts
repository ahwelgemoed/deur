import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutDevicesNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutDevicesNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpdateWithoutDeviceTypeInput> = z
  .object({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    deviceId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutDevicesNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const DevicesUpdateWithoutDeviceTypeInputObjectSchema = Schema;
