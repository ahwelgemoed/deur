import { DeviceSetupData } from '@deur/shared-hooks';

import { authApi } from '../../api/AxiosInstance';

export const createDevice = async (device: DeviceSetupData) => {
  const response = await authApi.post(`/device/create-device`, {
    deviceId: device.deviceId,
    name: device.friendlyName,
    locationId: device.locationId,
    deviceTypeId: device.deviceTypeId,
  });
  return response.data;
};
