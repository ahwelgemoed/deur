import { Link } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

export default function Page() {
  const slide = new Animated.Value(0);

  useEffect(() => {
    moveBoxIn();
  }, []);

  const moveBoxIn = () => {
    Animated.timing(slide, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
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
              <Link href="/create-new-user" className="h-full w-full">
                <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Create Account
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[100%] p-4">
              <Link href="/gate-actions/help-this-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Could Not Get In?
                </Text>
              </Link>
            </View>
          </View>
          <View className="flex flex-row w-full justify-center items-center px-10 gap-10">
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4">
              <Link href="/create-new-user" className="m-2 h-full w-full">
                <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  Forgot Your Access Card?
                </Text>
              </Link>
            </View>
            <View className="rounded-2xl bg-[#EFEFF5] flex justify-center h-[200px] flex-[50%] p-4 items-center">
              <Link href="/create-new-user" className="m-2 h-full w-full items-center">
                <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
                <Text className={'text-black font-body text-[40px] uppercase w-[80%]'}>
                  One time Access
                </Text>
              </Link>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
