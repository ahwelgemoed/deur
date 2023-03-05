import { MainLayout, View, Text } from '@deur/design-system';
import { useSearchParams } from 'expo-router';
import React from 'react';

import { mergedTrpcApi } from '../../src/contexts/trpc/trpc.provider';

const HelpThisUser = () => {
  const params = useSearchParams();
  const userToHelp = mergedTrpcApi.local.helpMemberRoute.getUserToHelp.useQuery({
    cardNumber: params.cardNumber,
  });
  if (userToHelp.isLoading) {
    return <Text>Loading</Text>;
  }
  if (!userToHelp.data) {
    return <Text>No Data</Text>;
  }
  return (
    <MainLayout
      bgColor="bg-primary"
      showBackButton
      headerMainText={`Need some Help ${userToHelp.data.name}?`}
      headerSubText=""
      body={
        <View className="flex w-full h-full items-center">
          <Text className="uppercase font-body text-xl">
            Here Is the reason we could not let you in today...
          </Text>
          {userToHelp.data?.reason === 'JUST_SIGNED_IN' && (
            <View className="py-10">
              <Text className="uppercase font-body text-[40px] text-light text-center">
                🚪 You just signed in...
              </Text>
              <Text className="uppercase font-body text-[20px] text-light text-center">
                please wait 5 minutes before trying again
              </Text>
            </View>
          )}
        </View>
      }
    />
  );
};

export default HelpThisUser;
