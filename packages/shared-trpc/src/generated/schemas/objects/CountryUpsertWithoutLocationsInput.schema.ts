import { z } from 'zod';
import { CountryUpdateWithoutLocationsInputObjectSchema } from './CountryUpdateWithoutLocationsInput.schema';
import { CountryUncheckedUpdateWithoutLocationsInputObjectSchema } from './CountryUncheckedUpdateWithoutLocationsInput.schema';
import { CountryCreateWithoutLocationsInputObjectSchema } from './CountryCreateWithoutLocationsInput.schema';
import { CountryUncheckedCreateWithoutLocationsInputObjectSchema } from './CountryUncheckedCreateWithoutLocationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.CountryUpsertWithoutLocationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CountryUpdateWithoutLocationsInputObjectSchema),
      z.lazy(() => CountryUncheckedUpdateWithoutLocationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CountryCreateWithoutLocationsInputObjectSchema),
      z.lazy(() => CountryUncheckedCreateWithoutLocationsInputObjectSchema),
    ]),
  })
  .strict();

export const CountryUpsertWithoutLocationsInputObjectSchema = Schema;
