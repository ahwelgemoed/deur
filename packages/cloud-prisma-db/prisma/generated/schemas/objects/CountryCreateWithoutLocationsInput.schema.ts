import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryCreateWithoutLocationsInput> = z
  .object({
    name: z.string(),
    code: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CountryCreateWithoutLocationsInputObjectSchema = Schema;
