import { UserCloudModel, VisitsToLocationCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const usersByLocationHeader = z.object({
  'x-location': z.string(),
});
export const usersByCountryHeader = z.object({
  'x-country': z.string(),
});

export const cleanUserSchema = UserCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

const userWithLastVisitSchema = cleanUserSchema.extend({
  visits: z.array(VisitsToLocationCloudModel),
});

export const getUsersByLocation = z.array(cleanUserSchema);
export const getUsersByLocationWithVisits = z.array(userWithLastVisitSchema);

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    usersByCountryHeader,
    userWithLastVisitSchema,
    getUsersByLocation,
    getUsersByLocationWithVisits,
    usersByLocationHeader,
  },
  { $id: 'userSchemas' }
);
