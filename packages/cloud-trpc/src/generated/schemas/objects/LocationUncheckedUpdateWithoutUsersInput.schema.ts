import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DevicesUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutUsersInput> = z
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
    countryId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    devices: z
      .lazy(() => DevicesUncheckedUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    visits: z
      .lazy(() => VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationUncheckedUpdateWithoutUsersInputObjectSchema = Schema;
