import { UserCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const usersByLocationHeader = z.object({
  'x-location': z.number(),
});
export const usersByCountryHeader = z.object({
  'x-country': z.number(),
});

export const cleanUserSchema = UserCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export const getUsersByLocation = z.array(cleanUserSchema);

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    usersByCountryHeader,
    getUsersByLocation,
    usersByLocationHeader,
  },
  { $id: 'userSchemas' }
);