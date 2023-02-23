import { z } from 'zod';
import { DevicesOrderByWithRelationInputObjectSchema } from './objects/DevicesOrderByWithRelationInput.schema';
import { DevicesWhereInputObjectSchema } from './objects/DevicesWhereInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';
import { DevicesCountAggregateInputObjectSchema } from './objects/DevicesCountAggregateInput.schema';
import { DevicesMinAggregateInputObjectSchema } from './objects/DevicesMinAggregateInput.schema';
import { DevicesMaxAggregateInputObjectSchema } from './objects/DevicesMaxAggregateInput.schema';

export const DevicesAggregateSchema = z.object({
  orderBy: z
    .union([
      DevicesOrderByWithRelationInputObjectSchema,
      DevicesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DevicesWhereInputObjectSchema.optional(),
  cursor: DevicesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), DevicesCountAggregateInputObjectSchema]).optional(),
  _min: DevicesMinAggregateInputObjectSchema.optional(),
  _max: DevicesMaxAggregateInputObjectSchema.optional(),
});
