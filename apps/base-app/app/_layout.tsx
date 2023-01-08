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
import { Layout, SplashScreen } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import GlobalAppSettings from '../src/components/GlobalAppSettings';

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
    <SafeAreaView>
      <RootLayout />
    </SafeAreaView>
  );
}

function RootLayout() {
  return (
    <Layout>
      <GlobalAppSettings>
        <Layout.Children />
      </GlobalAppSettings>
    </Layout>
  );
}
