import { z } from 'zod';
import { DeviceTypesWhereInputObjectSchema } from './objects/DeviceTypesWhereInput.schema';
import { DeviceTypesOrderByWithAggregationInputObjectSchema } from './objects/DeviceTypesOrderByWithAggregationInput.schema';
import { DeviceTypesScalarWhereWithAggregatesInputObjectSchema } from './objects/DeviceTypesScalarWhereWithAggregatesInput.schema';
import { DeviceTypesScalarFieldEnumSchema } from './enums/DeviceTypesScalarFieldEnum.schema';

export const DeviceTypesGroupBySchema = z.object({
  where: DeviceTypesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DeviceTypesOrderByWithAggregationInputObjectSchema,
      DeviceTypesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DeviceTypesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DeviceTypesScalarFieldEnumSchema),
});
