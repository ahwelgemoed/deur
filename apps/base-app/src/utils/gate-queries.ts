import axios from 'axios';
export const getUserToHelpThem = async (userId: string) => {
  const response = await axios.get(
    `http://localhost:3030/v1/gate-routes/get-user-to-help/${userId}`,
    {
      headers: {
        'x-origin-call': '1',
      },
    }
  );
  return response.data;
};
