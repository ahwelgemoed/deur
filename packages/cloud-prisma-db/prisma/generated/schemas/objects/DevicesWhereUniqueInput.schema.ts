import { z } from 'zod';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const DevicesWhereUniqueInputObjectSchema = Schema;
