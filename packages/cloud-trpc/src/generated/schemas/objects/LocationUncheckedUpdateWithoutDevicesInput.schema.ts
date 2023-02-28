import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutDevicesInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    users: z.lazy(() => UserUncheckedUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    lat: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    long: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    countryId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    visits: z
      .lazy(() => VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const LocationUncheckedUpdateWithoutDevicesInputObjectSchema = Schema;
