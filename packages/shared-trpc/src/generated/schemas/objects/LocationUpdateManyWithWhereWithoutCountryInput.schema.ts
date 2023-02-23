import { z } from 'zod';
import { LocationScalarWhereInputObjectSchema } from './LocationScalarWhereInput.schema';
import { LocationUpdateManyMutationInputObjectSchema } from './LocationUpdateManyMutationInput.schema';
import { LocationUncheckedUpdateManyWithoutLocationsInputObjectSchema } from './LocationUncheckedUpdateManyWithoutLocationsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpdateManyWithWhereWithoutCountryInput> = z
  .object({
    where: z.lazy(() => LocationScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LocationUpdateManyMutationInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateManyWithoutLocationsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpdateManyWithWhereWithoutCountryInputObjectSchema = Schema;
