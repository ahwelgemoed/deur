import axios from 'axios';

import { useDeviceSetupState } from '../contexts/SetupDevice.Context';

const BASE_URL = 'http://localhost:3030/v1';

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const AxiosInstance = ({ children }: { children: JSX.Element }) => {
  const { deviceDetails } = useDeviceSetupState();
  console.log('deviceDetails', deviceDetails);
  authApi.defaults.headers.common['Content-Type'] = 'application/json';
  authApi.defaults.headers.common['x-origin-call'] = deviceDetails?.locationId;
  authApi.defaults.headers.common['x-device-call'] = deviceDetails?.deviceId;
  return children;
};

export { authApi };
export default AxiosInstance;
