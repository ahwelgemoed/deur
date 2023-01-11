import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLocationInputObjectSchema } from './UserUpdateWithoutLocationInput.schema';
import { UserUncheckedUpdateWithoutLocationInputObjectSchema } from './UserUncheckedUpdateWithoutLocationInput.schema';
import { UserCreateWithoutLocationInputObjectSchema } from './UserCreateWithoutLocationInput.schema';
import { UserUncheckedCreateWithoutLocationInputObjectSchema } from './UserUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutLocationInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
