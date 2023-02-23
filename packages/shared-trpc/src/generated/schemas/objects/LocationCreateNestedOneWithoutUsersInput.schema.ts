import { z } from 'zod';
import { LocationCreateWithoutUsersInputObjectSchema } from './LocationCreateWithoutUsersInput.schema';
import { LocationUncheckedCreateWithoutUsersInputObjectSchema } from './LocationUncheckedCreateWithoutUsersInput.schema';
import { LocationCreateOrConnectWithoutUsersInputObjectSchema } from './LocationCreateOrConnectWithoutUsersInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutUsersInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutUsersInputObjectSchema).optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutUsersInputObjectSchema = Schema;
