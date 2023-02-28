import { z } from 'zod';
import { DevicesUpdateInputObjectSchema } from './objects/DevicesUpdateInput.schema';
import { DevicesUncheckedUpdateInputObjectSchema } from './objects/DevicesUncheckedUpdateInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';

export const DevicesUpdateOneSchema = z.object({
  data: z.union([DevicesUpdateInputObjectSchema, DevicesUncheckedUpdateInputObjectSchema]),
  where: DevicesWhereUniqueInputObjectSchema,
});
