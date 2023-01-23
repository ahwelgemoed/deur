import { useSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../../src/components/MainLayout';
import Swipper from '../../src/components/Swipper';
import { useSetToIdle } from '../../src/contexts/IdleState.Context';

const OpenGate = () => {
  const { setToInactive } = useSetToIdle();
  const params = useSearchParams();
  const { memberId, memberName } = params;
  const [successfullyGateOpened, setSuccessfullyGateOpened] = useState<boolean>(false);
  const successCallback = () => {
    setSuccessfullyGateOpened(true);
  };

  useEffect(() => {
    if (successfullyGateOpened) {
      setTimeout(() => {
        setToInactive();
      }, 5000);
    }
  }, [successfullyGateOpened]);

  if (!memberId) {
    return (
      <MainLayout
        showBackButton
        headerMainText="Error - No Member Found"
        headerSubText="Error Error Error"
        body={<View className="flex w-full h-full"></View>}
      />
    );
  }
  if (successfullyGateOpened) {
    return (
      <View className="bg-black w-full h-full flex justify-center p-4">
        <Text className="text-white font-body text-[100px]">🎉 Congratulations </Text>
        <View className="text-center flex content-center">
          <Text className="text-[#DDDDE1] font-display text-[40px]">
            The gate is open, Enjoy the 💪
          </Text>
        </View>
      </View>
    );
  }

  return (
    <MainLayout
      showBackButton
      headerMainText={`Congratulations ${memberName}`}
      headerSubText=""
      body={
        <View className="flex w-full h-full items-center">
          <Text className="uppercase font-body text-xl text-white">
            Choose a Gate and swipe and go enjoy...
          </Text>
          <Swipper successCallback={successCallback} />
        </View>
      }
    />
  );
};

export default OpenGate;
