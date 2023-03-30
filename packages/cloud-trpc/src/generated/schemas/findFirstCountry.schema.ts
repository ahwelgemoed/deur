import { z } from 'zod';
import { CountryOrderByWithRelationInputObjectSchema } from './objects/CountryOrderByWithRelationInput.schema';
import { CountryWhereInputObjectSchema } from './objects/CountryWhereInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryScalarFieldEnumSchema } from './enums/CountryScalarFieldEnum.schema';

export const CountryFindFirstSchema = z.object({
  orderBy: z
    .union([
      CountryOrderByWithRelationInputObjectSchema,
      CountryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CountryWhereInputObjectSchema.optional(),
  cursor: CountryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CountryScalarFieldEnumSchema).optional(),
});
