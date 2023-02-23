import { z } from 'zod';
import { LocationUpdateWithoutVisitsInputObjectSchema } from './LocationUpdateWithoutVisitsInput.schema';
import { LocationUncheckedUpdateWithoutVisitsInputObjectSchema } from './LocationUncheckedUpdateWithoutVisitsInput.schema';
import { LocationCreateWithoutVisitsInputObjectSchema } from './LocationCreateWithoutVisitsInput.schema';
import { LocationUncheckedCreateWithoutVisitsInputObjectSchema } from './LocationUncheckedCreateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutVisitsInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutVisitsInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutVisitsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutVisitsInputObjectSchema = Schema;
