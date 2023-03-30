import { z } from 'zod';
import { UserCreateWithoutVisitsInputObjectSchema } from './UserCreateWithoutVisitsInput.schema';
import { UserUncheckedCreateWithoutVisitsInputObjectSchema } from './UserUncheckedCreateWithoutVisitsInput.schema';
import { UserCreateOrConnectWithoutVisitsInputObjectSchema } from './UserCreateOrConnectWithoutVisitsInput.schema';
import { UserUpsertWithoutVisitsInputObjectSchema } from './UserUpsertWithoutVisitsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVisitsInputObjectSchema } from './UserUpdateWithoutVisitsInput.schema';
import { UserUncheckedUpdateWithoutVisitsInputObjectSchema } from './UserUncheckedUpdateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVisitsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutVisitsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVisitsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutVisitsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutVisitsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutVisitsNestedInputObjectSchema = Schema;
