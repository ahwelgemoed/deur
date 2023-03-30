import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationCreateWithoutLocationInputObjectSchema } from './VisitsToLocationCreateWithoutLocationInput.schema';
import { VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VisitsToLocationCreateWithoutLocationInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationCreateOrConnectWithoutLocationInputObjectSchema = Schema;
