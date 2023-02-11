/**
 * All Global Configs and Layouts from here
 */

import { DeviceStateProvider } from '@deur/shared-hooks';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigator, Slot, SplashScreen, useRouter } from 'expo-router';
import AxiosInstance from '../src/api/AxiosInstance';

import { HelpUserProvider } from '../src/contexts/HelpUser.Context';
import { IdleStateProvider } from '../src/contexts/IdleState.Context';

const queryClient = new QueryClient();

export default function Layout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <DeviceStateProvider useRouter={useRouter} setupUrl={'/initial-device-setup'}>
        <IdleStateProvider>
          <HelpUserProvider>
            <AxiosInstance>
              <RootLayout />
            </AxiosInstance>
          </HelpUserProvider>
        </IdleStateProvider>
      </DeviceStateProvider>
    </QueryClientProvider>
  );
}

function RootLayout() {
  return (
    <Navigator>
      <Slot />
    </Navigator>
  );
}
