import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import MainLayout from '../../src/components/MainLayout';
import { getUserToHelpThem } from '../../src/utils/queries/gate-queries';

const HelpThisUser = () => {
  const params = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ['getUserToHelp'],
    queryFn: () => {
      const restDAta = getUserToHelpThem(params.id);
      return restDAta;
    },
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
