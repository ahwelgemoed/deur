import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Page() {
  return (
    <View className="flex justify-center w-full flex-1 bg-black text-white items-center">
      <Text className="text-white">
        <Link href="/">/index</Link>
      </Text>
    </View>
  );
}
