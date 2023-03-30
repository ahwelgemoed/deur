import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutUsersInputObjectSchema } from './LocationCreateWithoutUsersInput.schema';
import { LocationUncheckedCreateWithoutUsersInputObjectSchema } from './LocationUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutUsersInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutUsersInputObjectSchema = Schema;
