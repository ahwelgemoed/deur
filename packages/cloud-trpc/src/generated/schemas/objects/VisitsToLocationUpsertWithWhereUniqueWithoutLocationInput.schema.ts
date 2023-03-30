import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationUpdateWithoutLocationInputObjectSchema } from './VisitsToLocationUpdateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedUpdateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedUpdateWithoutLocationInput.schema';
import { VisitsToLocationCreateWithoutLocationInputObjectSchema } from './VisitsToLocationCreateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpsertWithWhereUniqueWithoutLocationInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VisitsToLocationUpdateWithoutLocationInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedUpdateWithoutLocationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VisitsToLocationCreateWithoutLocationInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Schema;
