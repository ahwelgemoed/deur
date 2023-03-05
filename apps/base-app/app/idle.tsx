import { View, Text } from '@deur/design-system';
import { useMqttMessageListener } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';

import { useSetToIdle } from '../src/contexts/IdleState.Context';
import { mergedTrpcApi } from '../src/contexts/trpc/trpc.provider';

export default function IdlePage() {
  const [helpThisUserActive, setHelpThisUserActive] = useState<string>('');

  const userToHelp = mergedTrpcApi.local.helpMemberRoute.getUserToHelp.useQuery(
    {
      cardNumber: '0621f9ee-457f-45d1-bca6-0e835c85ca5d',
    },
    {
      enabled: true,
    }
  );
  console.log('userToHelp', userToHelp.data);
  const router = useRouter();
  const { setToActive } = useSetToIdle();

  useMqttMessageListener(EMQQTTTopics.HELP_THIS_USER, (message) => {
    setHelpThisUserActive(message.payloadString);
  });
  const gateSentRoute = () => {
    router.push({
      pathname: '/gate-actions/help-this-user',
      params: { requestId: helpThisUserActive },
    });
    setTimeout(() => {
      setToActive();
    }, 10);
  };

  useEffect(() => {
    if (helpThisUserActive) {
      console.log('helpThisUserActive', helpThisUserActive);
      userToHelp.refetch();
      setTimeout(() => {
        setHelpThisUserActive('');
      }, 10_000);
    }
  }, [helpThisUserActive]);

  // TODO:: MOVE TO PAGE OF ITS OWN
  if (helpThisUserActive) {
    return (
      <Pressable onPress={gateSentRoute}>
        <View className="w-full h-full flex justify-center p-4 bg-dark">
          <Text className="text-[#DDDDE1] font-body text-[100px]">👋 there... </Text>
          <Text className="text-[#DDDDE1] font-body text-[60px]">do you need some help?</Text>
          <View className="text-center flex content-center">
            <Text className="text-[#DDDDE1] font-display text-[40px] uppercase">
              Press to Interact
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={setToActive}>
      <View className="w-full h-full flex justify-center p-4 bg-dark">
        <View className="flex flex-row gap-2 justify-center items-center">
          <View className="bg-primary w-5 h-5 rounded-full"></View>
          <View className="bg-[#FFBD12] w-5 h-5 rounded-full"></View>
          <View className="bg-[#FF9692] w-5 h-5 rounded-full"></View>
          <View className="bg-[#F95A2C] w-5 h-5 rounded-full"></View>
        </View>
        <Text className="text-center font-display uppercase text-[100px] text-[#DDDDE1]">
          Welcome
        </Text>
        <View className="text-center flex content-center items-center">
          <Text className="text-[#DDDDE1] font-display uppercase text-[30px]">
            Press to Interact
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
