import { z } from 'zod';
import { DeviceTypesWhereInputObjectSchema } from './objects/DeviceTypesWhereInput.schema';

export const DeviceTypesDeleteManySchema = z.object({
  where: DeviceTypesWhereInputObjectSchema.optional(),
});
