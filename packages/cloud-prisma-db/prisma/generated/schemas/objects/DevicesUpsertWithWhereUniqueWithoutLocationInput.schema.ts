import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithoutLocationInputObjectSchema } from './DevicesUpdateWithoutLocationInput.schema';
import { DevicesUncheckedUpdateWithoutLocationInputObjectSchema } from './DevicesUncheckedUpdateWithoutLocationInput.schema';
import { DevicesCreateWithoutLocationInputObjectSchema } from './DevicesCreateWithoutLocationInput.schema';
import { DevicesUncheckedCreateWithoutLocationInputObjectSchema } from './DevicesUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpsertWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DevicesUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => DevicesUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DevicesCreateWithoutLocationInputObjectSchema),
      z.lazy(() => DevicesUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
