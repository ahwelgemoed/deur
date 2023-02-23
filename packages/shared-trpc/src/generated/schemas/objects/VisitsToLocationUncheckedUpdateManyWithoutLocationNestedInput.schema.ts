import { z } from 'zod';
import { VisitsToLocationCreateWithoutLocationInputObjectSchema } from './VisitsToLocationCreateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutLocationInput.schema';
import { VisitsToLocationCreateOrConnectWithoutLocationInputObjectSchema } from './VisitsToLocationCreateOrConnectWithoutLocationInput.schema';
import { VisitsToLocationUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './VisitsToLocationUpsertWithWhereUniqueWithoutLocationInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './VisitsToLocationUpdateWithWhereUniqueWithoutLocationInput.schema';
import { VisitsToLocationUpdateManyWithWhereWithoutLocationInputObjectSchema } from './VisitsToLocationUpdateManyWithWhereWithoutLocationInput.schema';
import { VisitsToLocationScalarWhereInputObjectSchema } from './VisitsToLocationScalarWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => VisitsToLocationUpsertWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array(),
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
        z.lazy(() => VisitsToLocationUpdateWithWhereUniqueWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VisitsToLocationUpdateManyWithWhereWithoutLocationInputObjectSchema),
        z.lazy(() => VisitsToLocationUpdateManyWithWhereWithoutLocationInputObjectSchema).array(),
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

export const VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInputObjectSchema = Schema;
