import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLocationInputObjectSchema } from './UserCreateWithoutLocationInput.schema';
import { UserUncheckedCreateWithoutLocationInputObjectSchema } from './UserUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutLocationInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutLocationInputObjectSchema = Schema;
