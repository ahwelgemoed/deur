import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DevicesUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUpdateManyWithoutLocationNestedInput.schema';
import { CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema } from './CountryUpdateOneRequiredWithoutLocationsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutUsersInput> = z
  .object({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    devices: z.lazy(() => DevicesUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    country: z
      .lazy(() => CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const LocationUpdateWithoutUsersInputObjectSchema = Schema;
