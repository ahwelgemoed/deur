import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DeviceTypesUpdateOneRequiredWithoutDevicesNestedInputObjectSchema } from './DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpdateWithoutLocationInput> = z
  .object({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    deviceId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    deviceType: z
      .lazy(() => DeviceTypesUpdateOneRequiredWithoutDevicesNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const DevicesUpdateWithoutLocationInputObjectSchema = Schema;
