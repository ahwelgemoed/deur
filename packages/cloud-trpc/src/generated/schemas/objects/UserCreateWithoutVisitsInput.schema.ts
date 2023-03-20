import { z } from 'zod';
import { LocationCreateNestedOneWithoutUsersInputObjectSchema } from './LocationCreateNestedOneWithoutUsersInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserCreateWithoutVisitsInput> = z
  .object({
    id: z.string().optional(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    memberShipType: z.number(),
    email: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    location: z.lazy(() => LocationCreateNestedOneWithoutUsersInputObjectSchema),
  })
  .strict();

export const UserCreateWithoutVisitsInputObjectSchema = Schema;
