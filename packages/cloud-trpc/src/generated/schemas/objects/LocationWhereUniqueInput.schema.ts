import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const LocationWhereUniqueInputObjectSchema = Schema;
