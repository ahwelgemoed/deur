import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';

export const VisitsToLocationDeleteOneSchema = z.object({
  where: VisitsToLocationWhereUniqueInputObjectSchema,
});