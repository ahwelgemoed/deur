import { Header } from '@deur/design-system';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Button } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  interpolateColor,
  useDerivedValue,
} from 'react-native-reanimated';

interface MainLayoutProps_HeaderText {
  showBackButton?: boolean;
  headerComponent?: never;
  headerMainText: string;
  headerSubText?: string;
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
  headerMainText,
  headerComponent,
  showBackButton = false,
}: MainLayoutProps) => {
  const [first, setFirst] = useState(false);
  const navigation = useNavigation();

  const progress = useDerivedValue(() => {
    return withTiming(first ? 1 : 0);
  });

  const randomWidth = useSharedValue(10);

  const config = {
    duration: 1500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0, 1], ['black', 'red']);

    return {
      backgroundColor,
    };
  });
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });
  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1, height: '100%' }}
      behavior="padding"
      enabled
      // keyboardVerticalOffset={50}
    >
      <View className="bg-[#00C6AE] w-full h-full flex p-4">
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
        <Animated.View style={[{ width: 100, height: 80, margin: 30 }, style, rStyle]} />
        <Button
          title="toggle"
          onPress={() => {
            setFirst(!first);
            randomWidth.value = Math.random() * 350;
          }}
        />
        <View className="flex-1 ">{body}</View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainLayout;
