import axios from 'axios';

import { BASE_URL } from '..';

export const getUserToHelpThem = async (userId: string) => {
  const response = await axios.get(`${BASE_URL}/gate-routes/get-user-to-help/${userId}`, {
    headers: {
      'x-origin-call': '1',
    },
  });
  return response.data;
};
