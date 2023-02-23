import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLocationInputObjectSchema } from './UserUpdateWithoutLocationInput.schema';
import { UserUncheckedUpdateWithoutLocationInputObjectSchema } from './UserUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
