import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';

import LoadingFullScreen from '../components/idlePages/LoadingPage';

type IdleStateProviderProps = { children: React.ReactNode };

export const DEVICE_STORAGE_ID = '@deviceSetup_1';

export type TDeviceSetupData = {
  deviceId: string;
  deviceTypeId: number;
  countryId: string;
  locationId: string;
  gps: {
    lat: number;
    long: number;
  };
  friendlyName: string;
};

export enum DeviceSetupState {
  loading = 'loading',
  successFull = 'successFull',
  neverDone = 'neverDone',
}

const SetupDeviceContext = createContext<{
  deviceSetupState: DeviceSetupState;
  deviceDetails?: TDeviceSetupData;
  getDeviceSetupData: () => Promise<void>;
}>({
  deviceSetupState: DeviceSetupState.loading,
  deviceDetails: undefined,
  getDeviceSetupData: () => Promise.resolve(),
});

export function DeviceStateProvider({ children }: IdleStateProviderProps) {
  const router = useRouter();

  const [deviceSetupState, setDeviceSetupState] = useState<DeviceSetupState>(
    DeviceSetupState.loading
  );
  const [deviceDetails, setDeviceDetails] = useState<TDeviceSetupData>();
  const getDeviceSetupData = async () => {
    const deviceSetupData = await AsyncStorage.getItem(DEVICE_STORAGE_ID);
    if (deviceSetupData) {
      setDeviceDetails(JSON.parse(deviceSetupData));
      setDeviceSetupState(DeviceSetupState.successFull);
    } else {
      setDeviceSetupState(DeviceSetupState.neverDone);
    }
  };

  useEffect(() => {
    getDeviceSetupData();
  }, []);

  useEffect(() => {
    if (deviceSetupState === DeviceSetupState.neverDone) {
      router.replace({ pathname: '/initial-device-setup' });
    }
    if (deviceSetupState === DeviceSetupState.successFull) {
      router.replace({ pathname: '/' });
    }
  }, [deviceSetupState]);

  if (deviceSetupState === DeviceSetupState.loading) {
    return <LoadingFullScreen explanation="Loading Device Setup State" />;
  }

  return (
    <SetupDeviceContext.Provider
      value={{
        deviceDetails,
        getDeviceSetupData,
        deviceSetupState,
      }}
    >
      {children}
    </SetupDeviceContext.Provider>
  );
}

export function useDeviceSetupState() {
  const context = useContext(SetupDeviceContext);
  if (context === undefined) {
    throw new Error('useHelpUser must be used within a CountProvider');
  }
  return context;
}
