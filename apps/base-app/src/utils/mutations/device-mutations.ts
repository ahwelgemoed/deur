import { authApi } from '../../api/AxiosInstance';
import { TDeviceSetupData } from '../../contexts/SetupDevice.Context';

export const createDevice = async (device: TDeviceSetupData) => {
  console.log('device', device);
  const response = await authApi.post(`/device/create-device`, {
    deviceId: device.deviceId,
    name: device.friendlyName,
    locationId: device.locationId,
    deviceTypeId: device.deviceTypeId,
  });
  return response.data;
};
