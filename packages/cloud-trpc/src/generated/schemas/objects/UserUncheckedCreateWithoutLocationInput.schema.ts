import { z } from 'zod';
import { VisitsToLocationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutLocationInput> = z
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
    visits: z
      .lazy(() => VisitsToLocationUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutLocationInputObjectSchema = Schema;
