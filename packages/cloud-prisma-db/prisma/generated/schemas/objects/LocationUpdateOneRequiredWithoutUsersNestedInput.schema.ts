import { z } from 'zod';
import { LocationCreateWithoutUsersInputObjectSchema } from './LocationCreateWithoutUsersInput.schema';
import { LocationUncheckedCreateWithoutUsersInputObjectSchema } from './LocationUncheckedCreateWithoutUsersInput.schema';
import { LocationCreateOrConnectWithoutUsersInputObjectSchema } from './LocationCreateOrConnectWithoutUsersInput.schema';
import { LocationUpsertWithoutUsersInputObjectSchema } from './LocationUpsertWithoutUsersInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutUsersInputObjectSchema } from './LocationUpdateWithoutUsersInput.schema';
import { LocationUncheckedUpdateWithoutUsersInputObjectSchema } from './LocationUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutUsersInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutUsersInputObjectSchema).optional(),
    upsert: z.lazy(() => LocationUpsertWithoutUsersInputObjectSchema).optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LocationUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationUpdateOneRequiredWithoutUsersNestedInputObjectSchema = Schema;
