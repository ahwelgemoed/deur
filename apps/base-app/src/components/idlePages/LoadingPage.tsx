import { View, Text } from '@deur/design-system';
import React from 'react';

type TLoadingPageProps = {
  explanation: string;
};

const LoadingFullScreen = ({ explanation }: TLoadingPageProps) => {
  return (
    <View className="bg-black w-full h-full flex justify-center p-4">
      <Text className="text-white font-body text-[100px]">Loading... </Text>
      <View className="text-center flex content-center">
        <Text className="text-[#DDDDE1] font-display text-[40px]">{explanation}</Text>
      </View>
    </View>
  );
};

export default LoadingFullScreen;
