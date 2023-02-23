import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutVisitsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVisitsNestedInput.schema';
import { LocationUpdateOneRequiredWithoutVisitsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutVisitsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutVisitsNestedInputObjectSchema).optional(),
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutVisitsNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict();

export const VisitsToLocationUpdateInputObjectSchema = Schema;
