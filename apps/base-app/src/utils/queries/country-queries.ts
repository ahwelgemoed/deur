import { CompleteCountry } from '@deur/shared-types';

import { authApi } from '../../api/AxiosInstance';

export const getAllCountries: () => Promise<CompleteCountry[]> = async () => {
  try {
    const response = await authApi.get(`/country/all-countries`);
    return response.data;
  } catch (error) {
    throw new Error('Error getting all countries');
  }
};
