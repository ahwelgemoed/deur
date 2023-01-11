import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutLocationNestedInputObjectSchema } from './UserUpdateManyWithoutLocationNestedInput.schema';
import { DevicesUpdateManyWithoutLocationNestedInputObjectSchema } from './DevicesUpdateManyWithoutLocationNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUpdateWithoutCountryInput> = z
  .object({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    users: z.lazy(() => UserUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    devices: z.lazy(() => DevicesUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const LocationUpdateWithoutCountryInputObjectSchema = Schema;
