import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutCountryInputObjectSchema } from './LocationUpdateWithoutCountryInput.schema';
import { LocationUncheckedUpdateWithoutCountryInputObjectSchema } from './LocationUncheckedUpdateWithoutCountryInput.schema';
import { LocationCreateWithoutCountryInputObjectSchema } from './LocationCreateWithoutCountryInput.schema';
import { LocationUncheckedCreateWithoutCountryInputObjectSchema } from './LocationUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpsertWithWhereUniqueWithoutCountryInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LocationUpdateWithoutCountryInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutCountryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutCountryInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutCountryInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithWhereUniqueWithoutCountryInputObjectSchema = Schema;
