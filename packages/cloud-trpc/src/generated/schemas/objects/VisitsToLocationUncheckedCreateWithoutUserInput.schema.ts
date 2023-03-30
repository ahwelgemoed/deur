import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    locationId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema = Schema;
