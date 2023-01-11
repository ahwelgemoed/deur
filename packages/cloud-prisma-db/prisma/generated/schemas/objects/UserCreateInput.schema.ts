import { z } from 'zod';
import { LocationCreateNestedOneWithoutUsersInputObjectSchema } from './LocationCreateNestedOneWithoutUsersInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    email: z.string(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    location: z.lazy(() => LocationCreateNestedOneWithoutUsersInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
