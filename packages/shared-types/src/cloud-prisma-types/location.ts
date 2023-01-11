import * as z from "zod"
import { CompleteUser, RelatedUserCloudModel, CompleteDevices, RelatedDevicesCloudModel, CompleteCountry, RelatedCountryCloudModel } from "./index"

export const LocationCloudModel = z.object({
  id: z.number().int(),
  name: z.string(),
  countryId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteLocation extends z.infer<typeof LocationCloudModel> {
  users: CompleteUser[]
  devices: CompleteDevices[]
  country: CompleteCountry
}

/**
 * RelatedLocationCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLocationCloudModel: z.ZodSchema<CompleteLocation> = z.lazy(() => LocationCloudModel.extend({
  users: RelatedUserCloudModel.array(),
  devices: RelatedDevicesCloudModel.array(),
  country: RelatedCountryCloudModel,
}))
