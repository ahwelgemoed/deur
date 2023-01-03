import { Heading, SubHeading } from '@deur/design-system';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

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
    <View className="flex w-full h-full">
      <View className="p-4 h-[100px]">
        {showBackButton && (
          <Text
            className="text-bold uppercase"
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
            <Heading>{headerMainText}</Heading>
            <SubHeading classNames="uppercase text-gray-500 text-[20px]">
              {headerSubText}
            </SubHeading>
          </>
        )}
      </View>
      <View className="flex p-4 h-full justify-center">
        <View className="h-[400px] ">
          {body}
          {/* <ScrollView horizontal className="flex" centerContent={true} style={{ flexGrow: 0 }}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <Link href="/create-new-user" key={item} className="m-2 p-2">
                <View className="w-[250px] bg-black rounded-tr-3xl rounded-bl-3xl h-full">
                  <Strong classNames={'text-white'}>Member {item}</Strong>
                </View>
              </Link>
            );
          })}
        </ScrollView> */}
        </View>
        <View className="flex p-4 justify-center">
          {footerComponent ? footerComponent : null}
          <Text>{footerMainText ? footerMainText : null}</Text>
          <Text>{footerSubText ? footerSubText : null}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainLayout;
