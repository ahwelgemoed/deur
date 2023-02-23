import { z } from 'zod';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';

export const DeviceTypesFindUniqueSchema = z.object({
  where: DeviceTypesWhereUniqueInputObjectSchema,
});
