import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutCountryInputObjectSchema } from './LocationCreateWithoutCountryInput.schema';
import { LocationUncheckedCreateWithoutCountryInputObjectSchema } from './LocationUncheckedCreateWithoutCountryInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutCountryInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutCountryInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutCountryInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutCountryInputObjectSchema = Schema;
