import { z } from 'zod';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryCreateWithoutLocationsInputObjectSchema } from './CountryCreateWithoutLocationsInput.schema';
import { CountryUncheckedCreateWithoutLocationsInputObjectSchema } from './CountryUncheckedCreateWithoutLocationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryCreateOrConnectWithoutLocationsInput> = z
  .object({
    where: z.lazy(() => CountryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CountryCreateWithoutLocationsInputObjectSchema),
      z.lazy(() => CountryUncheckedCreateWithoutLocationsInputObjectSchema),
    ]),
  })
  .strict();

export const CountryCreateOrConnectWithoutLocationsInputObjectSchema = Schema;
