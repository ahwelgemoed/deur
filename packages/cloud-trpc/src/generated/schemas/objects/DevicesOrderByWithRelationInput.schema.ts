import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { DeviceTypesOrderByWithRelationInputObjectSchema } from './DeviceTypesOrderByWithRelationInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    deviceId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
    lastOnline: z.lazy(() => SortOrderSchema).optional(),
    lastHeartbeat: z.lazy(() => SortOrderSchema).optional(),
    isOnline: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
    deviceType: z.lazy(() => DeviceTypesOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const DevicesOrderByWithRelationInputObjectSchema = Schema;
