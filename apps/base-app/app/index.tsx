import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Pressable, Easing } from 'react-native';

// import MainLayout from '../src/components/MainLayout';

export default function Page() {
  const [showIdlePage, setShowIdlePage] = useState(true);
  const slide = new Animated.Value(0);
  const callback = () => {
    console.log('callback');
  };

  useEffect(() => {
    if (!showIdlePage) {
      console.log('showIdlePage', showIdlePage);
      moveBoxIn();
    }
  }, [showIdlePage]);

  const moveBoxIn = () => {
    Animated.timing(slide, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(callback);
  };

  const yVal = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  if (showIdlePage) {
    return (
      <View className="bg-black w-full h-full flex justify-center p-4">
        <Pressable onPress={() => setShowIdlePage(false)}>
          <Text className="text-white font-body text-[100px]">Welcome</Text>

          <View className="text-center flex content-center">
            <Text className="text-[#DDDDE1] font-text text-[40px]">
              Press to Interact
              <View className="flex flex-row gap-2">
                <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
                <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
                <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
                <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
              </View>
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="bg-black w-full h-full flex ">
      <Text className="text-white font-body text-[100px]">Welcome</Text>
      <Text className="text-[#DDDDE1] font-text text-[40px]"></Text>

      <View className="w-full flex justify-center items-center h-full">
        <Animated.View
          className="bg-white flex h-full rounded-tl-3xl rounded-tr-3xl items-center mx-10"
          style={[animStyle]}
        >
          <View className="flex flex-row w-full justify-center items-center p-10 gap-10">
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[100%] p-4">
              <Link href="/create-new-user" className=" h-full w-full">
                <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Create Account
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[100%] p-4">
              <Link href="/create-new-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Gate Sent Me
                </Text>
              </Link>
            </View>
          </View>
          <View className="flex flex-row w-full justify-center items-center px-10 gap-10">
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4">
              <Link href="/create-new-user" className="m-2 h-full w-full">
                <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Forgot Card
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4 items-center">
              <Link href="/create-new-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Gate Sent Me
                </Text>
              </Link>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
