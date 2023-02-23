import { Card } from '@deur/design-system';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { api } from './_layout';
import MainLayout from '../src/components/MainLayout';

enum CardType {
  CREATE = '/create-new-user',
  DAYPASS = 'DAYPASS',
  GATESENTME = 'GATESENTME',
}

export default function Page() {
  const s = api.greeting.useQuery({ name: 'asd' });
  console.log('s', s.data);

  const router = useRouter();

  const onCardPress = (type: CardType) => {
    router.push(type);
  };
  return (
    <>
      <MainLayout
        bgColor="#F95A2C"
        headerMainText="Welcome"
        body={
          <View className="w-full flex items-center flex-row h-full justify-evenly">
            <Card
              onClick={() => onCardPress(CardType.CREATE)}
              classNames="bg-[#FFBD12]"
              title="CR
            ATE"
            />
            <Card
              onClick={() => onCardPress(CardType.DAYPASS)}
              classNames="bg-[#F95A2C]"
              title="DAY
              PASS"
            />
            <Card
              onClick={() => onCardPress(CardType.GATESENTME)}
              classNames="bg-[#FF9692]"
              title="GATE
            SENT
            ME"
            />
          </View>
        }
      />
    </>
  );
}
