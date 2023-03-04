import { z } from 'zod';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutVisitsInput> = z
  .object({
    id: z.string().optional(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    locationId: z.string(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    memberShipType: z.number(),
    email: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutVisitsInputObjectSchema = Schema;