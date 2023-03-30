import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithoutUserInputObjectSchema } from './VisitsToLocationUpdateWithoutUserInput.schema';
import { VisitsToLocationUncheckedUpdateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedUpdateWithoutUserInput.schema';
import { VisitsToLocationCreateWithoutUserInputObjectSchema } from './VisitsToLocationCreateWithoutUserInput.schema';
import { VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VisitsToLocationUpdateWithoutUserInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VisitsToLocationCreateWithoutUserInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
