import { z } from 'zod';
import { VisitsToLocationCreateWithoutUserInputObjectSchema } from './VisitsToLocationCreateWithoutUserInput.schema';
import { VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutUserInput.schema';
import { VisitsToLocationCreateOrConnectWithoutUserInputObjectSchema } from './VisitsToLocationCreateOrConnectWithoutUserInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VisitsToLocationCreateWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VisitsToLocationCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationCreateOrConnectWithoutUserInputObjectSchema).array(),
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

export const VisitsToLocationCreateNestedManyWithoutUserInputObjectSchema = Schema;
