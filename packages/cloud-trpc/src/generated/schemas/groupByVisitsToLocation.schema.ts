import { z } from 'zod';
import { VisitsToLocationWhereInputObjectSchema } from './objects/VisitsToLocationWhereInput.schema';
import { VisitsToLocationOrderByWithAggregationInputObjectSchema } from './objects/VisitsToLocationOrderByWithAggregationInput.schema';
import { VisitsToLocationScalarWhereWithAggregatesInputObjectSchema } from './objects/VisitsToLocationScalarWhereWithAggregatesInput.schema';
import { VisitsToLocationScalarFieldEnumSchema } from './enums/VisitsToLocationScalarFieldEnum.schema';

export const VisitsToLocationGroupBySchema = z.object({
  where: VisitsToLocationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VisitsToLocationOrderByWithAggregationInputObjectSchema,
      VisitsToLocationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VisitsToLocationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VisitsToLocationScalarFieldEnumSchema),
});
