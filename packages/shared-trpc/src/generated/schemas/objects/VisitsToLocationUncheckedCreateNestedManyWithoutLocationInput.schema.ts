import { z } from 'zod';
import { VisitsToLocationCreateWithoutLocationInputObjectSchema } from './VisitsToLocationCreateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutLocationInput.schema';
import { VisitsToLocationCreateOrConnectWithoutLocationInputObjectSchema } from './VisitsToLocationCreateOrConnectWithoutLocationInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VisitsToLocationCreateWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationCreateWithoutLocationInputObjectSchema).array(),
        z.lazy(() => VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VisitsToLocationCreateOrConnectWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationCreateOrConnectWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VisitsToLocationUncheckedCreateNestedManyWithoutLocationInputObjectSchema = Schema;
