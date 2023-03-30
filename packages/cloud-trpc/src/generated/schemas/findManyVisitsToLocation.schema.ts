import { z } from 'zod';
import { VisitsToLocationOrderByWithRelationInputObjectSchema } from './objects/VisitsToLocationOrderByWithRelationInput.schema';
import { VisitsToLocationWhereInputObjectSchema } from './objects/VisitsToLocationWhereInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationScalarFieldEnumSchema } from './enums/VisitsToLocationScalarFieldEnum.schema';

export const VisitsToLocationFindManySchema = z.object({
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
  distinct: z.array(VisitsToLocationScalarFieldEnumSchema).optional(),
});
