import { LocationCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

import { usersByLocationHeader } from '../users/users.schemas';

export const cleanLocationSchema = LocationCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export const getAllLocationsParams = z.object({
  countryId: z.string(),
});

export const getAllLocationsResponse = z.array(cleanLocationSchema);

export const { schemas: locationSchemas, $ref } = buildJsonSchemas(
  {
    getAllLocationsResponse,
    usersByLocationHeader,
    getAllLocationsParams,
  },
  { $id: 'locationSchemas' }
);
