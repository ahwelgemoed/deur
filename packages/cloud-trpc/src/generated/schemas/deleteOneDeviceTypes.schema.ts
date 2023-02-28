import { z } from 'zod';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';

export const DeviceTypesDeleteOneSchema = z.object({
  where: DeviceTypesWhereUniqueInputObjectSchema,
});
