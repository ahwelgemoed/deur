import { z } from 'zod';
import { LocationCreateNestedManyWithoutCountryInputObjectSchema } from './LocationCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    locations: z.lazy(() => LocationCreateNestedManyWithoutCountryInputObjectSchema).optional(),
  })
  .strict();

export const CountryCreateInputObjectSchema = Schema;
