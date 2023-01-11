import { z } from 'zod';
import { DevicesWhereInputObjectSchema } from './DevicesWhereInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesListRelationFilter> = z
  .object({
    every: z.lazy(() => DevicesWhereInputObjectSchema).optional(),
    some: z.lazy(() => DevicesWhereInputObjectSchema).optional(),
    none: z.lazy(() => DevicesWhereInputObjectSchema).optional(),
  })
  .strict();

export const DevicesListRelationFilterObjectSchema = Schema;
