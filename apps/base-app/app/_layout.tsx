/**
 * All Global Configs and Layouts from here
 */

import { DeviceStateProvider } from '@deur/shared-hooks';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import { Navigator, Slot, SplashScreen, useRouter } from 'expo-router';

import AxiosInstance from '../src/api/AxiosInstance';
import { IdleStateProvider } from '../src/contexts/IdleState.Context';
import { TRPCProvider } from '../src/contexts/trpc/trpc.provider';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <TRPCProvider>
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/initial-device-setup'}>
        <IdleStateProvider>
          <AxiosInstance>
            <RootLayout />
          </AxiosInstance>
        </IdleStateProvider>
      </DeviceStateProvider>
    </TRPCProvider>
  );
}

function RootLayout() {
  return (
    <Navigator>
      <Slot />
    </Navigator>
  );
}
