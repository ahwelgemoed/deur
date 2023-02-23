import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';

export const VisitsToLocationFindUniqueSchema = z.object({
  where: VisitsToLocationWhereUniqueInputObjectSchema,
});
