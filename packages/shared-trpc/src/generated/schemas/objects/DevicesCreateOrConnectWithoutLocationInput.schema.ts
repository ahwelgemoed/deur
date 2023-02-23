import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesCreateWithoutLocationInputObjectSchema } from './DevicesCreateWithoutLocationInput.schema';
import { DevicesUncheckedCreateWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema),
      z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesCreateOrConnectWithoutLocationInputObjectSchema = Schema;
