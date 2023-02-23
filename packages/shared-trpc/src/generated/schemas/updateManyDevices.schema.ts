import { z } from 'zod';
import { DevicesUpdateManyMutationInputObjectSchema } from './objects/DevicesUpdateManyMutationInput.schema';
import { DevicesWhereInputObjectSchema } from './objects/DevicesWhereInput.schema';

export const DevicesUpdateManySchema = z.object({
  data: DevicesUpdateManyMutationInputObjectSchema,
  where: DevicesWhereInputObjectSchema.optional(),
});
