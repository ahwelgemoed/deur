import { CountryCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const cleanCountrySchema = CountryCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export const getAllCountriesResponse = z.array(cleanCountrySchema);

export const { schemas: countrySchemas, $ref } = buildJsonSchemas(
  {
    getAllCountriesResponse,
  },
  { $id: 'countrySchemas' }
);
