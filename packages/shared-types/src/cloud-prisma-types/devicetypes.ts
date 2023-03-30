import * as z from "zod"
import { CompleteDevices, RelatedDevicesCloudModel } from "./index"

export const DeviceTypesCloudModel = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteDeviceTypes extends z.infer<typeof DeviceTypesCloudModel> {
  devices: CompleteDevices[]
}

/**
 * RelatedDeviceTypesCloudModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDeviceTypesCloudModel: z.ZodSchema<CompleteDeviceTypes> = z.lazy(() => DeviceTypesCloudModel.extend({
  devices: RelatedDevicesCloudModel.array(),
}))
