import { z } from 'zod';
import { VisitsToLocationCreateInputObjectSchema } from './objects/VisitsToLocationCreateInput.schema';
import { VisitsToLocationUncheckedCreateInputObjectSchema } from './objects/VisitsToLocationUncheckedCreateInput.schema';

export const VisitsToLocationCreateOneSchema = z.object({
  data: z.union([
    VisitsToLocationCreateInputObjectSchema,
    VisitsToLocationUncheckedCreateInputObjectSchema,
  ]),
});
