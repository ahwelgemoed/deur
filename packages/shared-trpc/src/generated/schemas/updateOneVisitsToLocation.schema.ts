import { z } from 'zod';
import { VisitsToLocationUpdateInputObjectSchema } from './objects/VisitsToLocationUpdateInput.schema';
import { VisitsToLocationUncheckedUpdateInputObjectSchema } from './objects/VisitsToLocationUncheckedUpdateInput.schema';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';

export const VisitsToLocationUpdateOneSchema = z.object({
  data: z.union([
    VisitsToLocationUpdateInputObjectSchema,
    VisitsToLocationUncheckedUpdateInputObjectSchema,
  ]),
  where: VisitsToLocationWhereUniqueInputObjectSchema,
});
