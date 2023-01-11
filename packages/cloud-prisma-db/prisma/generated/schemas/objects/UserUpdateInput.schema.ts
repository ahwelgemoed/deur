import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutUsersNestedInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    birthDay: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    cardNumber: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    isAllowed: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    location: z.lazy(() => LocationUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
