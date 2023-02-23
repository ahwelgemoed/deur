import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'birthDay',
  'name',
  'locationId',
  'cardNumber',
  'isAllowed',
  'memberShipType',
  'email',
  'createdAt',
  'updatedAt',
]);
