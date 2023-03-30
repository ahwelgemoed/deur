import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';

export const DevicesDeleteOneSchema = z.object({ where: DevicesWhereUniqueInputObjectSchema });
