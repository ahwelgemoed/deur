import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithoutUserInputObjectSchema } from './VisitsToLocationUpdateWithoutUserInput.schema';
import { VisitsToLocationUncheckedUpdateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VisitsToLocationUpdateWithoutUserInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
