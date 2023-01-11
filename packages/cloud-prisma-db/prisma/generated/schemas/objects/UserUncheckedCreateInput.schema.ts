import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    locationId: z.number(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
