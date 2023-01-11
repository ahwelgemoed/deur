import { z } from 'zod';
import { DeviceTypesCreateInputObjectSchema } from './objects/DeviceTypesCreateInput.schema';
import { DeviceTypesUncheckedCreateInputObjectSchema } from './objects/DeviceTypesUncheckedCreateInput.schema';

export const DeviceTypesCreateOneSchema = z.object({
  data: z.union([DeviceTypesCreateInputObjectSchema, DeviceTypesUncheckedCreateInputObjectSchema]),
});
