import { z } from 'zod';
import { VisitsToLocationWhereInputObjectSchema } from './objects/VisitsToLocationWhereInput.schema';

export const VisitsToLocationDeleteManySchema = z.object({
  where: VisitsToLocationWhereInputObjectSchema.optional(),
});
