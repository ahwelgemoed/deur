import { z } from 'zod';
import { DevicesWhereUniqueInputObjectSchema } from './objects/DevicesWhereUniqueInput.schema';

export const DevicesFindUniqueSchema = z.object({ where: DevicesWhereUniqueInputObjectSchema });
