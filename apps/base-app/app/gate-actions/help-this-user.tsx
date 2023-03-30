import { MainLayout, View, Text } from '@deur/design-system';
import { useSearchParams } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { mergedTrpcApi } from '../../src/contexts/trpc/trpc.provider';

const HelpThisUser = () => {
  const params = useSearchParams();
  const userToHelp = mergedTrpcApi.local.helpMemberRoute.getUserToHelp.useQuery({
    cardNumber: params.cardNumber,
  });
  console.log('🔥userToHelp', userToHelp);
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
      headerMainText={`Need some Help ${userToHelp.data.name || ''}?`}
      headerSubText=""
      body={
        <View className="flex w-full h-full items-center">
          <Text className="uppercase font-body text-xl">
            Here Is the reason we could not let you in today...
          </Text>
          {userToHelp.data?.reason === 'JUST_SIGNED_IN' && (
            <View className="py-10">
              <Text className="uppercase font-body text-[40px] trext-light text-center">
                🚪 You just signed in...
              </Text>
              <Text className="uppercase font-body text-[20px] text-light text-center">
                please wait 5 minutes before trying again
              </Text>
            </View>
          )}
          {userToHelp.data?.reason === 'NOT_GEO_FEASIBLE' && (
            <View className="py-10">
              <Text className="uppercase font-body text-[40px] trext-light text-center">
                🦾 HOW DID YOU GET HERE?
              </Text>
              <View className="flex justify-center">
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: 'https://media1.giphy.com/media/1wpt0Aef5EdGyczbLk/giphy.gif?cid=ecf05e472gls4and03qj4uo8nhgzvgn33uub16g3gvlmvhxj&rid=giphy.gif&ct=g',
                  }}
                />
              </View>
            </View>
          )}
        </View>
      }
    />
  );
};

export default HelpThisUser;
