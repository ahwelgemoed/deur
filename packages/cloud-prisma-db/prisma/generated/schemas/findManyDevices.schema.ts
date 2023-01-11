import { z } from 'zod';
import { DevicesOrderByWithRelationInputObjectSchema } from './objects/DevicesOrderByWithRelationInput.schema';
import { DevicesWhereInputObjectSchema } from './objects/DevicesWhereInput.schema';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';
import { DevicesScalarFieldEnumSchema } from './enums/DevicesScalarFieldEnum.schema';

export const DevicesFindManySchema = z.object({
  orderBy: z
    .union([
      DevicesOrderByWithRelationInputObjectSchema,
      DevicesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DevicesWhereInputObjectSchema.optional(),
  cursor: DevicesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DevicesScalarFieldEnumSchema).optional(),
});
