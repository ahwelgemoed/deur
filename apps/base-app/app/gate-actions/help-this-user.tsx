import React from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../../src/components/MainLayout';

const HelpThisUser = ({ route }: any) => {
  return (
    <MainLayout
      showBackButton
      headerMainText={`Need some Help ${route.params.member.name}?`}
      headerSubText=""
      body={
        <View className="flex w-full h-full items-center">
          <Text className="uppercase font-body text-xl">
            Here Is the reason we could not let you in today...
          </Text>
        </View>
      }
    />
  );
};

export default HelpThisUser;
