import { z } from 'zod';
import { LocationCreateNestedOneWithoutUsersInputObjectSchema } from './LocationCreateNestedOneWithoutUsersInput.schema';
import { VisitsToLocationCreateNestedManyWithoutUserInputObjectSchema } from './VisitsToLocationCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
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
    visits: z.lazy(() => VisitsToLocationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
