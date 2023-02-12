import { useMqttMessageListener } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { useSetToIdle } from '../src/contexts/IdleState.Context';

export default function IdlePage() {
  const [helpThisUserActive, setHelpThisUserActive] = useState<string>('');
  const router = useRouter();
  const { setToActive } = useSetToIdle();

  useMqttMessageListener(EMQQTTTopics.HELP_THIS_USER, (message) => {
    console.log('message', message.payloadString);
    setHelpThisUserActive(message.payloadString);
  });
  // // const { user } = useHelpUser();
  // console.log('user', user);
  const gateSentRoute = () => {
    // router.push('/gate-actions/help-this-user');
    router.push({
      pathname: '/gate-actions/help-this-user',
      params: { requestId: helpThisUserActive },
    });
    setTimeout(() => {
      setToActive();
    }, 0);
  };

  // TODO:: MOVE TO PAGE OF ITS OWN
  if (helpThisUserActive) {
    return (
      <Pressable onPress={gateSentRoute}>
        <View className="bg-black w-full h-full flex justify-center p-4">
          <Text className="text-white font-body text-[100px]">👋 there... </Text>
          <Text className="text-white font-body text-[60px]">do you need some help?</Text>
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
      <View className="bg-black w-full h-full flex justify-center p-4">
        <Text className="text-white font-text text-[100px]">Welcome</Text>
        <View className="text-center flex content-center">
          <Text className="text-[#DDDDE1] font-display text-[40px]">
            Press to Interact
            <View className="flex flex-row gap-2">
              <View className="bg-[#73EFFC] w-10 h-10 rounded-full"></View>
              <View className="bg-[#701BDC] w-10 h-10 rounded-full"></View>
              <View className="bg-[#F5C045] w-10 h-10 rounded-full"></View>
              <View className="bg-[#EA3877] w-10 h-10 rounded-full"></View>
            </View>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
