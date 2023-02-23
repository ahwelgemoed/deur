import { z } from 'zod';
import { CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';
import { CountryCreateInputObjectSchema } from './objects/CountryCreateInput.schema';
import { CountryUncheckedCreateInputObjectSchema } from './objects/CountryUncheckedCreateInput.schema';
import { CountryUpdateInputObjectSchema } from './objects/CountryUpdateInput.schema';
import { CountryUncheckedUpdateInputObjectSchema } from './objects/CountryUncheckedUpdateInput.schema';

export const CountryUpsertSchema = z.object({
  where: CountryWhereUniqueInputObjectSchema,
  create: z.union([CountryCreateInputObjectSchema, CountryUncheckedCreateInputObjectSchema]),
  update: z.union([CountryUpdateInputObjectSchema, CountryUncheckedUpdateInputObjectSchema]),
});
