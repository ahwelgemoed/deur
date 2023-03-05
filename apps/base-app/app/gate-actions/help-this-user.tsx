import { MainLayout, View, Text } from '@deur/design-system';
import { useSearchParams } from 'expo-router';
import React from 'react';

import { getUserToHelpThem } from '../../src/utils/queries/gate-queries';

const HelpThisUser = () => {
  const params = useSearchParams();
  console.log('params', params.requestId);

  return (
    <MainLayout
      bgColor="FF89BB"
      showBackButton
      headerMainText="Need some Help?"
      // headerMainText={`Need some Help ${data.user.name}?`}
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
