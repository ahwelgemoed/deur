import { Card, MainLayout, View } from '@deur/design-system';
import { useNavigation, useRouter } from 'expo-router';

enum CardType {
  CREATE = '/create-new-user',
  DAYPASS = 'DAYPASS',
  GATESENTME = 'GATESENTME',
}

export default function Page() {
  const router = useRouter();

  const onCardPress = (type: CardType) => {
    router.push(type);
  };
  return (
    <MainLayout
      useNavigationHook={useNavigation}
      bgColor="bg-primary"
      headerMainText="Welcome"
      body={
        <View className="w-full flex items-center flex-row h-full justify-evenly">
          <Card
            onClick={() => onCardPress(CardType.CREATE)}
            classNames="bg-[#FFBD12]"
            title="CRE
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
  );
}
