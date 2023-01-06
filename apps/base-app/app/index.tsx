import { Link } from 'expo-router';
import { View, Text } from 'react-native';

import MainLayout from '../src/components/MainLayout';

export default function Page() {
  return (
    <MainLayout
      headerMainText="Welcome"
      headerSubText=""
      body={
        <View className="flex flex-row justify-center ">
          <Link href="/create-new-user" className="m-2 p-2 w-[400px] bg-black ">
            <View className="  rounded-tr-3xl rounded-bl-3xl h-full px-10 py-4">
              <Text className={'text-white font-body text-[40px] uppercase text-center w-full'}>
                Create Account
              </Text>
            </View>
          </Link>
          <Link href="/create-new-user" className="m-2   bg-black w-[400px]">
            <View className="rounded-tr-3xl rounded-bl-3xl h-full px-10 py-4">
              <Text className={'text-white font-body text-[40px] uppercase text-center'}>
                The Gate Sent Me Here
              </Text>
            </View>
          </Link>
        </View>
      }
    />
  );
}
