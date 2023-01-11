import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryUncheckedCreateWithoutLocationsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CountryUncheckedCreateWithoutLocationsInputObjectSchema = Schema;
