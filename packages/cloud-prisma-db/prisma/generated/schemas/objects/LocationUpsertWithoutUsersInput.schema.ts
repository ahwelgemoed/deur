import { z } from 'zod';
import { LocationUpdateWithoutUsersInputObjectSchema } from './LocationUpdateWithoutUsersInput.schema';
import { LocationUncheckedUpdateWithoutUsersInputObjectSchema } from './LocationUncheckedUpdateWithoutUsersInput.schema';
import { LocationCreateWithoutUsersInputObjectSchema } from './LocationCreateWithoutUsersInput.schema';
import { LocationUncheckedCreateWithoutUsersInputObjectSchema } from './LocationUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutUsersInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutUsersInputObjectSchema = Schema;
