import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

import { useHelpUser } from '../src/contexts/HelpUser.Context';
import { useSetToIdle } from '../src/contexts/IdleState.Context';

export default function IdlePage() {
  const router = useRouter();
  const { setToActive } = useSetToIdle();
  const { user } = useHelpUser();

  const gateSentRoute = () => {
    router.push({ pathname: '/gate-actions/help-this-user', params: { id: user?.userId } });
    setTimeout(() => {
      setToActive();
    }, 0);
  };
  if (user.userId) {
    return (
      <Pressable onPress={gateSentRoute}>
        <View className="bg-black w-full h-full flex justify-center p-4">
          <Text className="text-white font-body text-[100px]">👋 {user.userName}</Text>
          <View className="text-center flex content-center">
            <Text className="text-[#DDDDE1] font-display text-[40px]">Press to Interact</Text>
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
