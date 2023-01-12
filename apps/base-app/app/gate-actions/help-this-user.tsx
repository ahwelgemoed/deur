import { useSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import useSWR from 'swr';

import MainLayout from '../../src/components/MainLayout';
import { getUserToHelpThem } from '../../src/utils/gate-queries';

const HelpThisUser = () => {
  const params = useSearchParams();
  const { data, isLoading } = useSWR('getUserToHelp', () => {
    const data = getUserToHelpThem(params.id);
    return data;
  });
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <MainLayout
      showBackButton
      headerMainText={`Need some Help ${data.user.name}?`}
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
