import React from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../../src/components/MainLayout';
import Swipper from '../../src/components/Swipper';

const OpenGate = ({ route }: any) => {
  if (!route.params.member) {
    return (
      <MainLayout
        showBackButton
        headerMainText="Error - No Member Found"
        headerSubText="Error Error Error"
        body={<View className="flex w-full h-full"></View>}
      />
    );
  }
  return (
    <MainLayout
      showBackButton
      headerMainText={`Congratulations ${route.params.member.name}`}
      headerSubText=""
      body={
        <View className="flex w-full h-full items-center">
          <Text className="uppercase font-body text-xl">
            Choose a Gate and swipe and go enjoy...
          </Text>
          <Swipper />
        </View>
      }
    />
  );
};

export default OpenGate;
