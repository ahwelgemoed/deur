/**
 * All Global Configs and Layouts from here
 */

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
import { Navigator, Slot, SplashScreen } from 'expo-router';

import { HelpUserProvider } from '../src/contexts/HelpUser.Context';
import { IdleStateProvider } from '../src/contexts/IdleState.Context';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Root() {
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
    <IdleStateProvider>
      <HelpUserProvider>
        <RootLayout />
      </HelpUserProvider>
    </IdleStateProvider>
  );
}

function RootLayout() {
  return (
    <Navigator>
      <Slot />
    </Navigator>
  );
}
