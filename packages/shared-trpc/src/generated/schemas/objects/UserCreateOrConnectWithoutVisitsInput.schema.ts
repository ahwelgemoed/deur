import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVisitsInputObjectSchema } from './UserCreateWithoutVisitsInput.schema';
import { UserUncheckedCreateWithoutVisitsInputObjectSchema } from './UserUncheckedCreateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVisitsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutVisitsInputObjectSchema = Schema;
