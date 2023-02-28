import { authApi } from '../../api/AxiosInstance';

export const getLocationByCountry = async (countryId: string) => {
  console.log('device.countryId', countryId);
  try {
    const response = await authApi.get(`/location/location-by-country/${countryId}`);

    console.log('getLocationByCountry', getLocationByCountry);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
