import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'lat',
  'long',
  'countryId',
  'createdAt',
  'updatedAt',
]);
