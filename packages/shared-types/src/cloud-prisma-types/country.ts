import * as z from 'zod';

import { CompleteLocation, RelatedLocationCloudModel } from './index';

export const CountryCloudModel = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export interface CompleteCountry extends z.infer<typeof CountryCloudModel> {
  locations: CompleteLocation[];
}

/**
 * RelatedCountryCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCountryCloudModel: z.ZodSchema<CompleteCountry> = z.lazy(() =>
  CountryCloudModel.extend({
    locations: RelatedLocationCloudModel.array(),
  })
);
