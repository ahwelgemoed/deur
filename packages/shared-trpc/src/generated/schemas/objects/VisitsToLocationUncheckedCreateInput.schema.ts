import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    locationId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const VisitsToLocationUncheckedCreateInputObjectSchema = Schema;
