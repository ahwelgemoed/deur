import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const CountryWhereUniqueInputObjectSchema = Schema;
