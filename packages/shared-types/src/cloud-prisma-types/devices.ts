import * as z from "zod"
import { CompleteLocation, RelatedLocationCloudModel, CompleteDeviceTypes, RelatedDeviceTypesCloudModel } from "./index"

export const DevicesCloudModel = z.object({
  id: z.number().int(),
  name: z.string(),
  deviceId: z.string(),
  locationId: z.number().int(),
  deviceTypeId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteDevices extends z.infer<typeof DevicesCloudModel> {
  location: CompleteLocation
  deviceType: CompleteDeviceTypes
}

/**
 * RelatedDevicesCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDevicesCloudModel: z.ZodSchema<CompleteDevices> = z.lazy(() => DevicesCloudModel.extend({
  location: RelatedLocationCloudModel,
  deviceType: RelatedDeviceTypesCloudModel,
}))
