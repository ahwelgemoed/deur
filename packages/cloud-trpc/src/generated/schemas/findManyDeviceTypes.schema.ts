import { z } from 'zod';
import { DeviceTypesOrderByWithRelationInputObjectSchema } from './objects/DeviceTypesOrderByWithRelationInput.schema';
import { DeviceTypesWhereInputObjectSchema } from './objects/DeviceTypesWhereInput.schema';
import { DeviceTypesWhereUniqueInputObjectSchema } from './objects/DeviceTypesWhereUniqueInput.schema';
import { DeviceTypesScalarFieldEnumSchema } from './enums/DeviceTypesScalarFieldEnum.schema';

export const DeviceTypesFindManySchema = z.object({
  orderBy: z
    .union([
      DeviceTypesOrderByWithRelationInputObjectSchema,
      DeviceTypesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypesWhereInputObjectSchema.optional(),
  cursor: DeviceTypesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTypesScalarFieldEnumSchema).optional(),
});
