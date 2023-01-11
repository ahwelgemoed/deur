import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutLocationInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutLocationInputObjectSchema = Schema;
