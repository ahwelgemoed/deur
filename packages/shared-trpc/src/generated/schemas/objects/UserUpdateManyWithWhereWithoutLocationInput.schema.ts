import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutUsersInputObjectSchema } from './UserUncheckedUpdateManyWithoutUsersInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutLocationInput> = z
  .object({
    where: z.lazy(() => UserScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateManyWithWhereWithoutLocationInputObjectSchema = Schema;
