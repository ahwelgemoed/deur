import { z } from 'zod';

export const VisitsToLocationScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'locationId',
  'createdAt',
  'updatedAt',
]);
