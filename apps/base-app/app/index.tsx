import { Strong } from '@deur/design-system';
import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

import MainLayout from '../src/components/MainLayout';

export default function Page() {
  return (
    <MainLayout
      headerMainText="Welcome to Apps"
      headerSubText="please choose an option"
      body={
        <ScrollView horizontal className="flex" centerContent={true} style={{ flexGrow: 0 }}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <Link href="/create-new-user" key={item} className="m-2 p-2">
                <View className="w-[250px] bg-black rounded-tr-3xl rounded-bl-3xl h-full">
                  <Strong classNames={'text-white'}>Member {item}</Strong>
                </View>
              </Link>
            );
          })}
        </ScrollView>
      }
    />
  );
}
