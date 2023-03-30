import { z } from 'zod';
import { VisitsToLocationUpdateManyMutationInputObjectSchema } from './objects/VisitsToLocationUpdateManyMutationInput.schema';
import { VisitsToLocationWhereInputObjectSchema } from './objects/VisitsToLocationWhereInput.schema';

export const VisitsToLocationUpdateManySchema = z.object({
  data: VisitsToLocationUpdateManyMutationInputObjectSchema,
  where: VisitsToLocationWhereInputObjectSchema.optional(),
});
