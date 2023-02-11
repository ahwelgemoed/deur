import { useDeviceState } from '@deur/shared-hooks';
import axios from 'axios';

const BASE_URL = 'http://localhost:3030/v1';

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const AxiosInstance = ({ children }: { children: JSX.Element }) => {
  const device = useDeviceState();
  const deviceState = device.getState();
  authApi.defaults.headers.common['Content-Type'] = 'application/json';
  authApi.defaults.headers.common['x-location'] = deviceState?.locationId;
  authApi.defaults.headers.common['x-device-call'] = deviceState?.deviceId;
  return children;
};

export { authApi };
export default AxiosInstance;
