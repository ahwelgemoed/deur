import { z } from 'zod';
import { DeviceTypesUpdateManyMutationInputObjectSchema } from './objects/DeviceTypesUpdateManyMutationInput.schema';
import { DeviceTypesWhereInputObjectSchema } from './objects/DeviceTypesWhereInput.schema';

export const DeviceTypesUpdateManySchema = z.object({
  data: DeviceTypesUpdateManyMutationInputObjectSchema,
  where: DeviceTypesWhereInputObjectSchema.optional(),
});
