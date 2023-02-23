import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationCreateWithoutUserInputObjectSchema } from './VisitsToLocationCreateWithoutUserInput.schema';
import { VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema } from './VisitsToLocationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VisitsToLocationCreateWithoutUserInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationCreateOrConnectWithoutUserInputObjectSchema = Schema;
