import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutDevicesNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutDevicesNestedInput.schema';
import { DeviceTypesUpdateOneRequiredWithoutDevicesNestedInputObjectSchema } from './DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    deviceId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutDevicesNestedInputObjectSchema)
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

export const DevicesUpdateInputObjectSchema = Schema;
