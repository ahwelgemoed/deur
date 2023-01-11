import { z } from 'zod';
import { UserCreateWithoutLocationInputObjectSchema } from './UserCreateWithoutLocationInput.schema';
import { UserUncheckedCreateWithoutLocationInputObjectSchema } from './UserUncheckedCreateWithoutLocationInput.schema';
import { UserCreateOrConnectWithoutLocationInputObjectSchema } from './UserCreateOrConnectWithoutLocationInput.schema';
import { UserUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutLocationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutLocationInput.schema';
import { UserUpdateManyWithWhereWithoutLocationInputObjectSchema } from './UserUpdateManyWithWhereWithoutLocationInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutLocationNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => UserUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => UserUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutLocationInputObjectSchema),
        z.lazy(() => UserUpdateManyWithWhereWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutLocationNestedInputObjectSchema = Schema;
