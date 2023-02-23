import { z } from 'zod';
import { DevicesWhereInputObjectSchema } from './objects/DevicesWhereInput.schema';
import { DevicesOrderByWithAggregationInputObjectSchema } from './objects/DevicesOrderByWithAggregationInput.schema';
import { DevicesScalarWhereWithAggregatesInputObjectSchema } from './objects/DevicesScalarWhereWithAggregatesInput.schema';
import { DevicesScalarFieldEnumSchema } from './enums/DevicesScalarFieldEnum.schema';

export const DevicesGroupBySchema = z.object({
  where: DevicesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DevicesOrderByWithAggregationInputObjectSchema,
      DevicesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DevicesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DevicesScalarFieldEnumSchema),
});
