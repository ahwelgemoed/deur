import { z } from 'zod';
import { UserCreateWithoutVisitsInputObjectSchema } from './UserCreateWithoutVisitsInput.schema';
import { UserUncheckedCreateWithoutVisitsInputObjectSchema } from './UserUncheckedCreateWithoutVisitsInput.schema';
import { UserCreateOrConnectWithoutVisitsInputObjectSchema } from './UserCreateOrConnectWithoutVisitsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutVisitsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVisitsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVisitsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutVisitsInputObjectSchema = Schema;
