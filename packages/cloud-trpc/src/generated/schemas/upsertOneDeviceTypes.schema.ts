import { z } from 'zod';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';
import { DeviceTypesCreateInputObjectSchema } from './objects/DeviceTypesCreateInput.schema';
import { DeviceTypesUncheckedCreateInputObjectSchema } from './objects/DeviceTypesUncheckedCreateInput.schema';
import { DeviceTypesUpdateInputObjectSchema } from './objects/DeviceTypesUpdateInput.schema';
import { DeviceTypesUncheckedUpdateInputObjectSchema } from './objects/DeviceTypesUncheckedUpdateInput.schema';

export const DeviceTypesUpsertSchema = z.object({
  where: DeviceTypesWhereUniqueInputObjectSchema,
  create: z.union([
    DeviceTypesCreateInputObjectSchema,
    DeviceTypesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DeviceTypesUpdateInputObjectSchema,
    DeviceTypesUncheckedUpdateInputObjectSchema,
  ]),
});
