import { z } from 'zod';
import { DeviceTypesOrderByWithRelationInputObjectSchema } from './objects/DeviceTypesOrderByWithRelationInput.schema';
import { DeviceTypesWhereInputObjectSchema } from './objects/DeviceTypesWhereInput.schema';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';
import { DeviceTypesCountAggregateInputObjectSchema } from './objects/DeviceTypesCountAggregateInput.schema';
import { DeviceTypesMinAggregateInputObjectSchema } from './objects/DeviceTypesMinAggregateInput.schema';
import { DeviceTypesMaxAggregateInputObjectSchema } from './objects/DeviceTypesMaxAggregateInput.schema';
import { DeviceTypesAvgAggregateInputObjectSchema } from './objects/DeviceTypesAvgAggregateInput.schema';
import { DeviceTypesSumAggregateInputObjectSchema } from './objects/DeviceTypesSumAggregateInput.schema';

export const DeviceTypesAggregateSchema = z.object({
  orderBy: z
    .union([
      DeviceTypesOrderByWithRelationInputObjectSchema,
      DeviceTypesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypesWhereInputObjectSchema.optional(),
  cursor: DeviceTypesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), DeviceTypesCountAggregateInputObjectSchema]).optional(),
  _min: DeviceTypesMinAggregateInputObjectSchema.optional(),
  _max: DeviceTypesMaxAggregateInputObjectSchema.optional(),
  _avg: DeviceTypesAvgAggregateInputObjectSchema.optional(),
  _sum: DeviceTypesSumAggregateInputObjectSchema.optional(),
});
