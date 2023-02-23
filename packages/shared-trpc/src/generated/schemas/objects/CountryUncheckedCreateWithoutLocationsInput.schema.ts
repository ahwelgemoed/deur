import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryUncheckedCreateWithoutLocationsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CountryUncheckedCreateWithoutLocationsInputObjectSchema = Schema;
