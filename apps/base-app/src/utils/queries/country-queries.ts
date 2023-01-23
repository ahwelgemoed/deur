import axios from 'axios';

import { BASE_URL } from '..';

export const getAllCountries = async () => {
  const response = await axios.get(`${BASE_URL}/country-routes/all-countries`, {
    headers: {
      'x-origin-call': '1',
    },
  });
  return response.data;
};
