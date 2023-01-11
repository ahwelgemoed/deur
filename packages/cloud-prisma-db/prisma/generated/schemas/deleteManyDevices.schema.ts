import { z } from 'zod';
import { DevicesWhereInputObjectSchema } from './objects/DevicesWhereInput.schema';

export const DevicesDeleteManySchema = z.object({
  where: DevicesWhereInputObjectSchema.optional(),
});
