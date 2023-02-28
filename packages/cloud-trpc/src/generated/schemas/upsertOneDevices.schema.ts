import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';
import { DevicesCreateInputObjectSchema } from './objects/DevicesCreateInput.schema';
import { DevicesUncheckedCreateInputObjectSchema } from './objects/DevicesUncheckedCreateInput.schema';
import { DevicesUpdateInputObjectSchema } from './objects/DevicesUpdateInput.schema';
import { DevicesUncheckedUpdateInputObjectSchema } from './objects/DevicesUncheckedUpdateInput.schema';

export const DevicesUpsertSchema = z.object({
  where: DevicesWhereUniqueInputObjectSchema,
  create: z.union([DevicesCreateInputObjectSchema, DevicesUncheckedCreateInputObjectSchema]),
  update: z.union([DevicesUpdateInputObjectSchema, DevicesUncheckedUpdateInputObjectSchema]),
});
