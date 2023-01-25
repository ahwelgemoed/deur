import { CompleteDeviceTypes } from '@deur/shared-types';
import { authApi } from '../../api/AxiosInstance';

export const getAllDeviceTypes: () => Promise<CompleteDeviceTypes[]> = async () => {
  try {
    const response = await authApi.get(`/device/all-device-types`);
    return response.data;
  } catch (error) {
    throw new Error("Couldn't get all device types");
  }
};
