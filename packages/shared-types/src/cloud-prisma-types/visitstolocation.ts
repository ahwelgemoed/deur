import * as z from "zod"
import { CompleteUser, RelatedUserCloudModel, CompleteLocation, RelatedLocationCloudModel } from "./index"

export const VisitsToLocationCloudModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  locationId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteVisitsToLocation extends z.infer<typeof VisitsToLocationCloudModel> {
  user: CompleteUser
  location: CompleteLocation
}

/**
 * RelatedVisitsToLocationCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVisitsToLocationCloudModel: z.ZodSchema<CompleteVisitsToLocation> = z.lazy(() => VisitsToLocationCloudModel.extend({
  user: RelatedUserCloudModel,
  location: RelatedLocationCloudModel,
}))
