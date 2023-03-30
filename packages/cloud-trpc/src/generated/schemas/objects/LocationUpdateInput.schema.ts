import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutLocationNestedInputObjectSchema } from './UserUpdateManyWithoutLocationNestedInput.schema';
import { DevicesUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUpdateManyWithoutLocationNestedInput.schema';
import { CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema } from './CountryUpdateOneRequiredWithoutLocationsNestedInput.schema';
import { VisitsToLocationUpdateManyWithoutLocationNestedInputObjectSchema } from './VisitsToLocationUpdateManyWithoutLocationNestedInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    lat: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    long: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    users: z.lazy(() => UserUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    country: z
      .lazy(() => CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema)
      .optional(),
    visits: z
      .lazy(() => VisitsToLocationUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUpdateInputObjectSchema = Schema;
