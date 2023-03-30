import { z } from 'zod';
import { UserCreateWithoutLocationInputObjectSchema } from './UserCreateWithoutLocationInput.schema';
import { UserUncheckedCreateWithoutLocationInputObjectSchema } from './UserUncheckedCreateWithoutLocationInput.schema';
import { UserCreateOrConnectWithoutLocationInputObjectSchema } from './UserCreateOrConnectWithoutLocationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutLocationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutLocationInputObjectSchema),
        z.lazy(() => UserCreateWithoutLocationInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutLocationInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutLocationInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedCreateNestedManyWithoutLocationInputObjectSchema = Schema;
