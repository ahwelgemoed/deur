import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DevicesUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutUsersInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    devices: z
      .lazy(() => DevicesUncheckedUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    countryId: z
      .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const LocationUncheckedUpdateWithoutUsersInputObjectSchema = Schema;
