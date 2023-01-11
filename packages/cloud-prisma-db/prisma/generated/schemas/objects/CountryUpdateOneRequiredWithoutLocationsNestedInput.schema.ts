import { z } from 'zod';
import { CountryCreateWithoutLocationsInputObjectSchema } from './CountryCreateWithoutLocationsInput.schema';
import { CountryUncheckedCreateWithoutLocationsInputObjectSchema } from './CountryUncheckedCreateWithoutLocationsInput.schema';
import { CountryCreateOrConnectWithoutLocationsInputObjectSchema } from './CountryCreateOrConnectWithoutLocationsInput.schema';
import { CountryUpsertWithoutLocationsInputObjectSchema } from './CountryUpsertWithoutLocationsInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';
import { CountryUpdateWithoutLocationsInputObjectSchema } from './CountryUpdateWithoutLocationsInput.schema';
import { CountryUncheckedUpdateWithoutLocationsInputObjectSchema } from './CountryUncheckedUpdateWithoutLocationsInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryUpdateOneRequiredWithoutLocationsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CountryCreateWithoutLocationsInputObjectSchema),
        z.lazy(() => CountryUncheckedCreateWithoutLocationsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CountryCreateOrConnectWithoutLocationsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => CountryUpsertWithoutLocationsInputObjectSchema).optional(),
    connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CountryUpdateWithoutLocationsInputObjectSchema),
        z.lazy(() => CountryUncheckedUpdateWithoutLocationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CountryUpdateOneRequiredWithoutLocationsNestedInputObjectSchema = Schema;
