import { Strong, Heading, SubHeading } from '@deur/design-system';
import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

export default function Page() {
  return (
    <View className="flex w-full flex-1 p-10 bg-white">
      <View className="p-4">
        <Heading classNames="text-4xl uppercase bolder text-black">Welcome to App</Heading>
        <SubHeading classNames="uppercase text-gray-500">choose an option</SubHeading>
      </View>
      <View className="flex flex-1 p-4 justify-center ">
        <View className="h-[500px]">
          <ScrollView horizontal className="">
            <View className="w-[300px] bg-black m-2 p-2 rounded-tl-3xl rounded-br-3xl">
              <Strong classNames={'text-white'}>
                <Link href="/create-new-user">Create New User</Link>
              </Strong>
            </View>
            <View className="w-[300px] bg-gray-400 m-2 p-2">
              <Strong classNames={'text-orange-500'}>
                <Link href="/create-new-user">Create New User</Link>
              </Strong>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
