import { authApi } from '../../api/AxiosInstance';

export const getAllDeviceTypes = async () => {
  const response = await authApi.get(`/device-routes/all-device-types`);
  return response.data;
};
