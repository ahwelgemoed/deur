import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    cardNumber: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;