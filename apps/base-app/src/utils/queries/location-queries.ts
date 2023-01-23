import axios from 'axios';

import { BASE_URL } from '..';

export const getLocationByCountry = async (countryId: string) => {
  const response = await axios.get(`${BASE_URL}/location-routes/location-by-country/${countryId}`, {
    headers: {
      'x-origin-call': '1',
    },
  });
  return response.data;
};
