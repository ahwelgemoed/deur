import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, createContext, useContext } from 'react';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DeviceSetupData {
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
      name: 'device-setup-dv',
    }
  )
);

const StoreContext = createContext(useSetUpDeviceStore);

export const DeviceStateProvider = ({
  children,
  useRouter,
  setupUrl,
}: {
  children: React.ReactNode;
  // TODO: Fix this type
  useRouter: any;
  setupUrl: string;
}) => {
  const router = useRouter();
  useEffect(() => {
    const { deviceId, countryId, locationId } = useSetUpDeviceStore.getState();
    if (!countryId || !locationId || !deviceId) {
      console.log('🚀 --- NO DEVICE  FOUND --- 🚀');
      router.push(setupUrl);
    }

    const deviceStoreSub = useSetUpDeviceStore.subscribe((state, prevState) => {
      console.log('🚀 --- DEVICE STATE --- 🚀');
      if (state.countryId && state.locationId && state.deviceId) {
        router.push('/');
      }
    });

    return () => {
      deviceStoreSub();
    };
  }, [useSetUpDeviceStore]);

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
