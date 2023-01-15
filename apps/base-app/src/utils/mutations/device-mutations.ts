import axios from 'axios';

import { BASE_URL } from '..';
import { TDeviceSetupData } from '../../contexts/SetupDevice.Context';

export const createDevice = async (device: TDeviceSetupData) => {
  const response = await axios.post(`${BASE_URL}/device-routes/create-device`, {
    deviceId: device.deviceId,
    name: device.friendlyName,
    locationId: device.locationId,
    deviceTypeId: device.deviceTypeId,
  });
  return response.data;
};
