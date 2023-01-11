import { z } from 'zod';
import { CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';

export const CountryFindUniqueSchema = z.object({ where: CountryWhereUniqueInputObjectSchema });
