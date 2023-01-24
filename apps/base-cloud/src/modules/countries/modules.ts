import { z } from 'zod';
import { CountryCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';

export const getAllCountriesResponse = z.array(CountryCloudModel);

export const { schemas: countrySchemas, $ref } = buildJsonSchemas({
  getAllCountriesResponse,
});
