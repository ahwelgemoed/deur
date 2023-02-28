import { z } from 'zod';
import { DevicesCreateWithoutLocationInputObjectSchema } from './DevicesCreateWithoutLocationInput.schema';
import { DevicesUncheckedCreateWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateWithoutLocationInput.schema';
import { DevicesCreateOrConnectWithoutLocationInputObjectSchema } from './DevicesCreateOrConnectWithoutLocationInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesUncheckedCreateNestedManyWithoutLocationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema).array(),
        z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DevicesCreateOrConnectWithoutLocationInputObjectSchema),
        z.lazy(() => DevicesCreateOrConnectWithoutLocationInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DevicesWhereUniqueInputObjectSchema),
        z.lazy(() => DevicesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DevicesUncheckedCreateNestedManyWithoutLocationInputObjectSchema = Schema;
