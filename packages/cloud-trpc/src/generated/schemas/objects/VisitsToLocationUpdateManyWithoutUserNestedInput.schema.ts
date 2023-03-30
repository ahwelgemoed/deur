import { z } from 'zod';
import { VisitsToLocationCreateWithoutUserInputObjectSchema } from './VisitsToLocationCreateWithoutUserInput.schema';
import { VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutUserInput.schema';
import { VisitsToLocationCreateOrConnectWithoutUserInputObjectSchema } from './VisitsToLocationCreateOrConnectWithoutUserInput.schema';
import { VisitsToLocationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './VisitsToLocationUpsertWithWhereUniqueWithoutUserInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './VisitsToLocationUpdateWithWhereUniqueWithoutUserInput.schema';
import { VisitsToLocationUpdateManyWithWhereWithoutUserInputObjectSchema } from './VisitsToLocationUpdateManyWithWhereWithoutUserInput.schema';
import { VisitsToLocationScalarWhereInputObjectSchema } from './VisitsToLocationScalarWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => VisitsToLocationUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
        z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VisitsToLocationUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VisitsToLocationUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => VisitsToLocationUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VisitsToLocationScalarWhereInputObjectSchema),
        z.lazy(() => VisitsToLocationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VisitsToLocationUpdateManyWithoutUserNestedInputObjectSchema = Schema;
