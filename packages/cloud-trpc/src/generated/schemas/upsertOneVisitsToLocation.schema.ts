import { z } from 'zod';
import { VisitsToLocationWhereUniqueInputObjectSchema } from './objects/VisitsToLocationWhereUniqueInput.schema';
import { VisitsToLocationCreateInputObjectSchema } from './objects/VisitsToLocationCreateInput.schema';
import { VisitsToLocationUncheckedCreateInputObjectSchema } from './objects/VisitsToLocationUncheckedCreateInput.schema';
import { VisitsToLocationUpdateInputObjectSchema } from './objects/VisitsToLocationUpdateInput.schema';
import { VisitsToLocationUncheckedUpdateInputObjectSchema } from './objects/VisitsToLocationUncheckedUpdateInput.schema';

export const VisitsToLocationUpsertSchema = z.object({
  where: VisitsToLocationWhereUniqueInputObjectSchema,
  create: z.union([
    VisitsToLocationCreateInputObjectSchema,
    VisitsToLocationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VisitsToLocationUpdateInputObjectSchema,
    VisitsToLocationUncheckedUpdateInputObjectSchema,
  ]),
});
