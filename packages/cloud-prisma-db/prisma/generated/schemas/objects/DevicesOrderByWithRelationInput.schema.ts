import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { DeviceTypesOrderByWithRelationInputObjectSchema } from './DeviceTypesOrderByWithRelationInput.schema';

import type { Prisma } from '../..';

const Schema: z.ZodType<Prisma.DevicesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    deviceId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
    deviceType: z.lazy(() => DeviceTypesOrderByWithRelationInputObjectSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DevicesOrderByWithRelationInputObjectSchema = Schema;
