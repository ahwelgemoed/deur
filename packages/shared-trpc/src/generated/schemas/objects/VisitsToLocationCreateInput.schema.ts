import { z } from 'zod';
import { UserCreateNestedOneWithoutVisitsInputObjectSchema } from './UserCreateNestedOneWithoutVisitsInput.schema';
import { LocationCreateNestedOneWithoutVisitsInputObjectSchema } from './LocationCreateNestedOneWithoutVisitsInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.VisitsToLocationCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVisitsInputObjectSchema),
    location: z.lazy(() => LocationCreateNestedOneWithoutVisitsInputObjectSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const VisitsToLocationCreateInputObjectSchema = Schema;
