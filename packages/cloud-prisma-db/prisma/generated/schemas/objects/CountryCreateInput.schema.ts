import { z } from 'zod';
import { LocationCreateNestedManyWithoutCountryInputObjectSchema } from './LocationCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryCreateInput> = z
  .object({
    name: z.string(),
    code: z.string(),
    locations: z.lazy(() => LocationCreateNestedManyWithoutCountryInputObjectSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CountryCreateInputObjectSchema = Schema;
