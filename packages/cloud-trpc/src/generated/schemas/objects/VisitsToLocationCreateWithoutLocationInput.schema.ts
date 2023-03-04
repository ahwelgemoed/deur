import { z } from 'zod';
import { UserCreateNestedOneWithoutVisitsInputObjectSchema } from './UserCreateNestedOneWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateWithoutLocationInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVisitsInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const VisitsToLocationCreateWithoutLocationInputObjectSchema = Schema;