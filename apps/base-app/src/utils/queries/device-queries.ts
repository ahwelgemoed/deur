import axios from 'axios';

import { BASE_URL } from '..';

export const getAllDeviceTypes = async () => {
  const response = await axios.get(`${BASE_URL}/device-routes/all-device-types`, {
    headers: {
      'x-origin-call': '1',
    },
  });
  return response.data;
};
