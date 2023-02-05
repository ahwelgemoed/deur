import { createStore } from 'zustand';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { persist } from 'zustand/middleware';
import { createContext, useContext } from 'react';

interface DeviceSetupData {
  deviceId: string;
  deviceTypeId: number;
  countryId: string;
  locationId: string;
  friendlyName: string;
}

export const useSetUpDeviceStore = createStore<DeviceSetupData>()(
  persist(
    () => ({
      deviceId: '',
      deviceTypeId: 0,
      countryId: '',
      locationId: '',
      friendlyName: '',
    }),
    {
      name: 'device-setup-data',
    }
  )
);

const StoreContext = createContext(useSetUpDeviceStore);

export const DeviceStateProvider = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  useEffect(() => {
    const { deviceId, countryId, locationId } = useSetUpDeviceStore.getState();

    if (!countryId || !locationId || !deviceId) {
      // Push to setup device page
      // router.push('/setup-device');
    }

    const deviceStoreSub = useSetUpDeviceStore.subscribe((state, prevState) => {
      console.log('🚀 --- DEVICE STATE --- 🚀');
      console.log('state', state);
    });

    return () => {
      deviceStoreSub();
    };
  }, []);

  return <StoreContext.Provider value={useSetUpDeviceStore}>{children}</StoreContext.Provider>;
};

export const useDeviceState = () => useContext(StoreContext);

// const hashStorage: StateStorage = {
//   getItem: (key): string => {
//     const searchParams = new URLSearchParams(location.hash.slice(1));
//     const storedValue = searchParams.get(key);
//     if (!storedValue) return '';
//     return JSON.parse(storedValue);
//   },
//   setItem: (key, newValue): void => {
//     const searchParams = new URLSearchParams(location.hash.slice(1));
//     searchParams.set(key, JSON.stringify(newValue));
//     location.hash = searchParams.toString();
//   },
//   removeItem: (key): void => {
//     const searchParams = new URLSearchParams(location.hash.slice(1));
//     searchParams.delete(key);
//     location.hash = searchParams.toString();
//   },
// };
