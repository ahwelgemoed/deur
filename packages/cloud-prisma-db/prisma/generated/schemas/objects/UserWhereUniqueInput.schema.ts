import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    cardNumber: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
