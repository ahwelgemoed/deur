import { z } from 'zod';
import { VisitsToLocationCreateNestedManyWithoutUserInputObjectSchema } from './VisitsToLocationCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserCreateWithoutLocationInput> = z
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
    visits: z.lazy(() => VisitsToLocationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateWithoutLocationInputObjectSchema = Schema;
