import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutVisitsInputObjectSchema } from './LocationCreateWithoutVisitsInput.schema';
import { LocationUncheckedCreateWithoutVisitsInputObjectSchema } from './LocationUncheckedCreateWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutVisitsInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutVisitsInputObjectSchema = Schema;
