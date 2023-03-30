import { z } from 'zod';
import { DeviceTypesUpdateInputObjectSchema } from './objects/DeviceTypesUpdateInput.schema';
import { DeviceTypesUncheckedUpdateInputObjectSchema } from './objects/DeviceTypesUncheckedUpdateInput.schema';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';

export const DeviceTypesUpdateOneSchema = z.object({
  data: z.union([DeviceTypesUpdateInputObjectSchema, DeviceTypesUncheckedUpdateInputObjectSchema]),
  where: DeviceTypesWhereUniqueInputObjectSchema,
});
