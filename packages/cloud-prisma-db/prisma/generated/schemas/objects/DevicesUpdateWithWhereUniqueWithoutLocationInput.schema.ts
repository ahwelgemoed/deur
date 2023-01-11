import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './DevicesWhereUniqueInput.schema';
import { DevicesUpdateWithoutLocationInputObjectSchema } from './DevicesUpdateWithoutLocationInput.schema';
import { DevicesUncheckedUpdateWithoutLocationInputObjectSchema } from './DevicesUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesUpdateWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => DevicesWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DevicesUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => DevicesUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
