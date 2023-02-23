import { z } from 'zod';
import { LocationCreateWithoutVisitsInputObjectSchema } from './LocationCreateWithoutVisitsInput.schema';
import { LocationUncheckedCreateWithoutVisitsInputObjectSchema } from './LocationUncheckedCreateWithoutVisitsInput.schema';
import { LocationCreateOrConnectWithoutVisitsInputObjectSchema } from './LocationCreateOrConnectWithoutVisitsInput.schema';
import { LocationUpsertWithoutVisitsInputObjectSchema } from './LocationUpsertWithoutVisitsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutVisitsInputObjectSchema } from './LocationUpdateWithoutVisitsInput.schema';
import { LocationUncheckedUpdateWithoutVisitsInputObjectSchema } from './LocationUncheckedUpdateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutVisitsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutVisitsInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutVisitsInputObjectSchema).optional(),
    upsert: z.lazy(() => LocationUpsertWithoutVisitsInputObjectSchema).optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => LocationUpdateWithoutVisitsInputObjectSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LocationUpdateOneRequiredWithoutVisitsNestedInputObjectSchema = Schema;
