import { z } from 'zod';
import { VisitsToLocationScalarWhereInputObjectSchema } from './VisitsToLocationScalarWhereInput.schema';
import { VisitsToLocationUpdateManyMutationInputObjectSchema } from './VisitsToLocationUpdateManyMutationInput.schema';
import { VisitsToLocationUncheckedUpdateManyWithoutVisitsInputObjectSchema } from './VisitsToLocationUncheckedUpdateManyWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => VisitsToLocationScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VisitsToLocationUpdateManyMutationInputObjectSchema),
      z.lazy(() => VisitsToLocationUncheckedUpdateManyWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict();

export const VisitsToLocationUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
