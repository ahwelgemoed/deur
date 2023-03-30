import { z } from 'zod';
import { DeviceTypesWhereInputObjectSchema } from './DeviceTypesWhereInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DeviceTypesRelationFilter> = z
  .object({
    is: z.lazy(() => DeviceTypesWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => DeviceTypesWhereInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTypesRelationFilterObjectSchema = Schema;
