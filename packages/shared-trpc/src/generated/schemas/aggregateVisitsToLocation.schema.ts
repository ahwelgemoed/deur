import { z } from 'zod';
import { VisitsToLocationOrderByWithRelationInputObjectSchema } from './objects/VisitsToLocationOrderByWithRelationInput.schema';
import { VisitsToLocationWhereInputObjectSchema } from './objects/VisitsToLocationWhereInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationCountAggregateInputObjectSchema } from './objects/VisitsToLocationCountAggregateInput.schema';
import { VisitsToLocationMinAggregateInputObjectSchema } from './objects/VisitsToLocationMinAggregateInput.schema';
import { VisitsToLocationMaxAggregateInputObjectSchema } from './objects/VisitsToLocationMaxAggregateInput.schema';

export const VisitsToLocationAggregateSchema = z.object({
  orderBy: z
    .union([
      VisitsToLocationOrderByWithRelationInputObjectSchema,
      VisitsToLocationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VisitsToLocationWhereInputObjectSchema.optional(),
  cursor: VisitsToLocationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), VisitsToLocationCountAggregateInputObjectSchema]).optional(),
  _min: VisitsToLocationMinAggregateInputObjectSchema.optional(),
  _max: VisitsToLocationMaxAggregateInputObjectSchema.optional(),
});
