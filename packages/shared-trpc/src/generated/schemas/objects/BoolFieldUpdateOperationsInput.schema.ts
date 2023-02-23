import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z
  .object({
    set: z.boolean().optional(),
  })
  .strict();

export const BoolFieldUpdateOperationsInputObjectSchema = Schema;
