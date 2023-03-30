import { z } from 'zod';
import { DevicesCreateInputObjectSchema } from './objects/DevicesCreateInput.schema';
import { DevicesUncheckedCreateInputObjectSchema } from './objects/DevicesUncheckedCreateInput.schema';

export const DevicesCreateOneSchema = z.object({
  data: z.union([DevicesCreateInputObjectSchema, DevicesUncheckedCreateInputObjectSchema]),
});
