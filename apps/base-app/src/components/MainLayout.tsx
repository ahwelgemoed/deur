import { Header } from '@deur/design-system';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

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

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1, height: '100%' }}
      behavior="padding"
      enabled
      // keyboardVerticalOffset={50}
    >
      <View className={`bg-[${bgColor}] w-full h-full flex p-4`}>
        <View className="">
          {showBackButton && (
            <Text
              className="text-bold uppercase pt-4"
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
              <Header classNames="text-white">{headerMainText}</Header>
              <Text className="">{headerSubText}</Text>
            </>
          )}
        </View>

        <View className="flex-1 ">{body}</View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainLayout;
