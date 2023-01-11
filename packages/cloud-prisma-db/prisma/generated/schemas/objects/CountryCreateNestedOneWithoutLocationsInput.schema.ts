import { z } from 'zod';
import { CountryCreateWithoutLocationsInputObjectSchema } from './CountryCreateWithoutLocationsInput.schema';
import { CountryUncheckedCreateWithoutLocationsInputObjectSchema } from './CountryUncheckedCreateWithoutLocationsInput.schema';
import { CountryCreateOrConnectWithoutLocationsInputObjectSchema } from './CountryCreateOrConnectWithoutLocationsInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './CountryWhereUniqueInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.CountryCreateNestedOneWithoutLocationsInput> = z
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
    connect: z.lazy(() => CountryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CountryCreateNestedOneWithoutLocationsInputObjectSchema = Schema;
