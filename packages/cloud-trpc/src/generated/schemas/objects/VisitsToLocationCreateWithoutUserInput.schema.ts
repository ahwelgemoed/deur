import { z } from 'zod';
import { LocationCreateNestedOneWithoutVisitsInputObjectSchema } from './LocationCreateNestedOneWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    location: z.lazy(() => LocationCreateNestedOneWithoutVisitsInputObjectSchema),
  })
  .strict();

export const VisitsToLocationCreateWithoutUserInputObjectSchema = Schema;
