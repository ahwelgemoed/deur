import { z } from 'zod';
import { LocationUncheckedCreateNestedManyWithoutCountryInputObjectSchema } from './LocationUncheckedCreateNestedManyWithoutCountryInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    locations: z
      .lazy(() => LocationUncheckedCreateNestedManyWithoutCountryInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const CountryUncheckedCreateInputObjectSchema = Schema;
