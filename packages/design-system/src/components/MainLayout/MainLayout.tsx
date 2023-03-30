import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { MainLayoutProps } from './Mainlayout.types';
import { View, Text, Header } from '../..';

export const MainLayout = ({
  body,
  useNavigationHook,
  bgColor = 'bg-[#00C6AE]',
  headerSubText,
  scrollable = true,
  headerMainText,
  headerComponent,
  showBackButton = false,
}: MainLayoutProps) => {
  const navigation = useNavigationHook && useNavigationHook();
  return (
    <KeyboardAvoidingView style={{ flexGrow: 1, height: '100%' }} behavior="padding" enabled>
      <View className={`w-full h-full flex p-4 min-h-screen ${bgColor}`}>
        <View className="">
          {showBackButton && (
            <Text
              className="text-bold uppercase pt-4 font-body text-white"
              onPress={() => {
                navigation?.goBack();
              }}
            >
              Go Back
            </Text>
          )}
          {headerComponent ? (
            headerComponent
          ) : (
            <>
              <Header classNames="font-display uppercase text-white" isBig>
                {headerMainText}
              </Header>
              <Text className="text-white">{headerSubText}</Text>
            </>
          )}
        </View>
        <ScrollView scrollEnabled={scrollable} contentContainerStyle={{ flexGrow: 1 }}>
          {body}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
