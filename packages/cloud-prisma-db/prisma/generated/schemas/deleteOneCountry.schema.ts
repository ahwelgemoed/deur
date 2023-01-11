import { z } from 'zod';
import { CountryWhereUniqueInputObjectSchema } from './objects/CountryWhereUniqueInput.schema';

export const CountryDeleteOneSchema = z.object({ where: CountryWhereUniqueInputObjectSchema });
