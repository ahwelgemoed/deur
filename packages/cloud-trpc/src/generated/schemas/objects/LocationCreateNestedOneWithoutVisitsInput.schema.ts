import { z } from 'zod';
import { LocationCreateWithoutVisitsInputObjectSchema } from './LocationCreateWithoutVisitsInput.schema';
import { LocationUncheckedCreateWithoutVisitsInputObjectSchema } from './LocationUncheckedCreateWithoutVisitsInput.schema';
import { LocationCreateOrConnectWithoutVisitsInputObjectSchema } from './LocationCreateOrConnectWithoutVisitsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutVisitsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutVisitsInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutVisitsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutVisitsInputObjectSchema).optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutVisitsInputObjectSchema = Schema;
