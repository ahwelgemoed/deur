import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'birthDay',
  'name',
  'locationId',
  'cardNumber',
  'isAllowed',
  'createdAt',
  'updatedAt',
]);
