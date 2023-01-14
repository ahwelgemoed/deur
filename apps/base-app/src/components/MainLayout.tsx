import { Heading, SubHeading } from '@deur/design-system';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';

interface MainLayoutProps_HeaderText {
  showBackButton?: boolean;
  headerComponent?: never;
  headerMainText: string;
  headerSubText: string;
  body: React.ReactNode;
  footerComponent?: React.ReactNode;
  footerMainText?: never;
  footerSubText?: never;
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
}
type MainLayoutProps =
  | MainLayoutProps_HeaderText
  | MainLayoutProps_HeaderNode
  | MainLayoutProps_FooterText;

const MainLayout = ({
  body,
  headerSubText,
  footerSubText,
  headerMainText,
  footerMainText,
  footerComponent,
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
      <View className="bg-black w-full h-full flex p-2">
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
              <Heading classNames="text-white font-body text-[80px]">{headerMainText}</Heading>
              <Text className="uppercase text-[#DDDDE1] font-text text-[40px]">
                {headerSubText}
              </Text>
            </>
          )}
        </View>
        <View className="flex-1 ">{body}</View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainLayout;
