import { Strong, Heading, SubHeading } from '@deur/design-system';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Page() {
  return (
    <View className="flex justify-center w-full flex-1 items-center pt-10">
      <Heading>Welcome to App</Heading>
      <SubHeading>choose an option</SubHeading>
      <Text className="text-white"></Text>
      <Strong>
        <Link href="/create-new-user">Create New User</Link>
      </Strong>
    </View>
  );
}
