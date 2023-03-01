// import { Text, View } from 'react-native';

import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { MainLayoutProps } from './Mainlayout.types';
import { View, Text, Header } from '../..';

const isHexColor = (color: string) => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

export const MainLayout = ({
  body,
  bgColor = '#00C6AE',
  headerSubText,
  headerMainText,
  headerComponent,
  showBackButton = false,
}: MainLayoutProps) => {
  const calculatedBGColor = isHexColor(bgColor) ? `bg-[${bgColor}]` : `bg-${bgColor}`;
  return (
    <KeyboardAvoidingView style={{ flexGrow: 1, height: '100%' }} behavior="padding" enabled>
      <View className={`w-full h-full flex p-4 ${bgColor}`}>
        <View className="">
          {showBackButton && (
            <Text
              className="text-bold uppercase pt-4 font-body"
              onPress={() => {
                //   navigation.goBack();
              }}
            >
              Go Back
            </Text>
          )}
          {headerComponent ? (
            headerComponent
          ) : (
            <>
              <Header classNames="font-display uppercase pt-2" isBig>
                {headerMainText}
              </Header>
              <Text className="">{headerSubText}</Text>
            </>
          )}
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{body}</ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
