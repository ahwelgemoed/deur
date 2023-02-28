import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DevicesUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUpdateManyWithoutLocationNestedInput.schema';
import { CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema } from './CountryUpdateOneRequiredWithoutLocationsNestedInput.schema';
import { VisitsToLocationUpdateManyWithoutLocationNestedInputObjectSchema } from './VisitsToLocationUpdateManyWithoutLocationNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutUsersInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    devices: z.lazy(() => DevicesUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    lat: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    long: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    country: z
      .lazy(() => CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema)
      .optional(),
    visits: z
      .lazy(() => VisitsToLocationUpdateManyWithoutLocationNestedInputObjectSchema)
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
