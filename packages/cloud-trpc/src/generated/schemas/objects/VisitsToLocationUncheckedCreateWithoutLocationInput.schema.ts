import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUncheckedCreateWithoutLocationInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema = Schema;
