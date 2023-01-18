import * as z from "zod"
import { CompleteLocation, RelatedLocationCloudModel, CompleteVisitsToLocation, RelatedVisitsToLocationCloudModel } from "./index"

export const UserCloudModel = z.object({
  id: z.number().int(),
  email: z.string(),
  birthDay: z.date(),
  name: z.string().nullish(),
  locationId: z.number().int(),
  cardNumber: z.string(),
  isAllowed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserCloudModel> {
  location: CompleteLocation
  visits: CompleteVisitsToLocation[]
}

/**
 * RelatedUserCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserCloudModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserCloudModel.extend({
  location: RelatedLocationCloudModel,
  visits: RelatedVisitsToLocationCloudModel.array(),
}))
