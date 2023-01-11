import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutCountryInputObjectSchema } from './LocationUpdateWithoutCountryInput.schema';
import { LocationUncheckedUpdateWithoutCountryInputObjectSchema } from './LocationUncheckedUpdateWithoutCountryInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationUpdateWithWhereUniqueWithoutCountryInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LocationUpdateWithoutCountryInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutCountryInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpdateWithWhereUniqueWithoutCountryInputObjectSchema = Schema;
