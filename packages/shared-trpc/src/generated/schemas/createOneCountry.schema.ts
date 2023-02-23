import { z } from 'zod';
import { CountryCreateInputObjectSchema } from './objects/CountryCreateInput.schema';
import { CountryUncheckedCreateInputObjectSchema } from './objects/CountryUncheckedCreateInput.schema';

export const CountryCreateOneSchema = z.object({
  data: z.union([CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema]),
});
