import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithoutLocationInputObjectSchema } from './VisitsToLocationUpdateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedUpdateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpdateWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VisitsToLocationUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
