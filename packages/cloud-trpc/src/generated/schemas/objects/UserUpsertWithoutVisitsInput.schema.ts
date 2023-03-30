import { z } from 'zod';
import { UserUpdateWithoutVisitsInputObjectSchema } from './UserUpdateWithoutVisitsInput.schema';
import { UserUncheckedUpdateWithoutVisitsInputObjectSchema } from './UserUncheckedUpdateWithoutVisitsInput.schema';
import { UserCreateWithoutVisitsInputObjectSchema } from './UserCreateWithoutVisitsInput.schema';
import { UserUncheckedCreateWithoutVisitsInputObjectSchema } from './UserUncheckedCreateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUpsertWithoutVisitsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutVisitsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutVisitsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutVisitsInputObjectSchema = Schema;
