import { View } from 'react-native';
import React from 'react';

import MainLayout from '../../src/components/MainLayout';
import Swipper from '../../src/components/Swipper';

const OpenGate = ({ route }: any) => {
  console.log('route.params', route.params.member);

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
      headerSubText="You may now swipe to open the gate"
      body={
        <View className="flex w-full h-full">
          <Swipper />
        </View>
      }
    />
  );
};

export default OpenGate;
