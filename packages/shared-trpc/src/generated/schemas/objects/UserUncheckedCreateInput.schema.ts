import { z } from 'zod';
import { VisitsToLocationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    birthDay: z.date(),
    name: z.string().optional().nullable(),
    locationId: z.string(),
    cardNumber: z.string(),
    isAllowed: z.boolean().optional(),
    memberShipType: z.number(),
    email: z.string(),
    visits: z
      .lazy(() => VisitsToLocationUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
