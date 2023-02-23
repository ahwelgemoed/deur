import { z } from 'zod';
import { DevicesScalarWhereInputObjectSchema } from './DevicesScalarWhereInput.schema';
import { DevicesUpdateManyMutationInputObjectSchema } from './DevicesUpdateManyMutationInput.schema';
import { DevicesUncheckedUpdateManyWithoutDevicesInputObjectSchema } from './DevicesUncheckedUpdateManyWithoutDevicesInput.schema';

import type { Prisma } from '../../../../../cloud-prisma-db/prisma/generated';

const Schema: z.ZodType<Prisma.DevicesUpdateManyWithWhereWithoutDeviceTypeInput> = z
  .object({
    where: z.lazy(() => DevicesScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DevicesUpdateManyMutationInputObjectSchema),
      z.lazy(() => DevicesUncheckedUpdateManyWithoutDevicesInputObjectSchema),
    ]),
  })
  .strict();

export const DevicesUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema = Schema;
