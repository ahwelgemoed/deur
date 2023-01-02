import { useMqtt, useSendMqttMessage } from '@deur/shared-hooks';
import { Strong } from '@deur/design-system';
import { View, Text } from 'react-native';

const App = () => {
  const [_, isConnected] = useMqtt();
  const [sendMessage] = useSendMqttMessage((e) => console.log('e', e));

  return (
    <View className="flex justify-center w-full flex-1 bg-black text-white items-center">
      {isConnected ? (
        <Text className="text-green-700">Connected</Text>
      ) : (
        <Text className="text-gray-400">Not Connected</Text>
      )}
      <Strong>
        WHAT
        <Text className="text-white">Welcome to my Gates</Text>
      </Strong>
    </View>
  );
};

export default App;
