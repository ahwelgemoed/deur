import { Header, View, Text } from '@deur/design-system';
import { useNavigation } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

const isHexColor = (color: string) => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

interface MainLayoutProps_HeaderText {
  showBackButton?: boolean;
  headerComponent?: never;
  headerMainText: string;
  headerSubText?: string;
  body: React.ReactNode;
  footerComponent?: React.ReactNode;
  footerMainText?: never;
  footerSubText?: never;
  bgColor?: string;
}
interface MainLayoutProps_HeaderNode {
  showBackButton?: boolean;
  headerComponent: React.ReactNode;
  headerMainText?: never;
  headerSubText?: never;
  body: React.ReactNode;
  footerComponent?: React.ReactNode;
  footerMainText?: never;
  footerSubText?: never;
  bgColor?: string;
}
interface MainLayoutProps_FooterText {
  showBackButton?: boolean;
  headerComponent: React.ReactNode;
  headerMainText?: never;
  headerSubText?: never;
  body: React.ReactNode;
  footerComponent?: never;
  footerMainText?: string;
  footerSubText?: string;
  bgColor?: string;
}
type MainLayoutProps =
  | MainLayoutProps_HeaderText
  | MainLayoutProps_HeaderNode
  | MainLayoutProps_FooterText;

const MainLayout = ({
  body,
  bgColor = '#00C6AE',
  headerSubText,
  headerMainText,
  headerComponent,
  showBackButton = false,
}: MainLayoutProps) => {
  const navigation = useNavigation();

  const calculatedBGColor = isHexColor(bgColor) ? `bg-[${bgColor}]` : `bg-${bgColor}`;

  return (
    <KeyboardAvoidingView style={{ flexGrow: 1, height: '100%' }} behavior="padding" enabled>
      <View className={`w-full h-full flex p-4 ${calculatedBGColor}`}>
        <View className="">
          {showBackButton && (
            <Text
              className="text-bold uppercase pt-4 font-body"
              onPress={() => {
                navigation.goBack();
              }}
            >
              Go Back
            </Text>
          )}
          {headerComponent ? (
            headerComponent
          ) : (
            <>
              <Header classNames="text-white font-display uppercase pt-2" isBig>
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

export default MainLayout;
