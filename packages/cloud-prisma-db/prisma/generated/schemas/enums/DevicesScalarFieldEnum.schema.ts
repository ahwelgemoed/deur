import { z } from 'zod';

export const DevicesScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'deviceId',
  'locationId',
  'deviceTypeId',
  'createdAt',
  'updatedAt',
]);
