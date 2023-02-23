import { z } from 'zod';
import { CountryUpdateInputObjectSchema } from './objects/CountryUpdateInput.schema';
import { CountryUncheckedUpdateInputObjectSchema } from './objects/CountryUncheckedUpdateInput.schema';
import { CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';

export const CountryUpdateOneSchema = z.object({
  data: z.union([CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema]),
  where: CountryWhereUniqueInputObjectSchema,
});
