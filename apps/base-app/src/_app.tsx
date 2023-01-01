import { useMqtt, useSendMqttMessage } from '@deur/shared-hooks';
import { View, Text } from 'react-native';

const App = () => {
  const [_, isConnected] = useMqtt();
  const [sendMessage] = useSendMqttMessage((e) => console.log('e', e));

  return (
    <View className="flex justify-center w-full flex-1 bg-black text-white items-center">
      {isConnected ? (
        <Text className="text-green-700">Connected</Text>
      ) : (
        <Text className="text-red-700">Not Connected</Text>
      )}
      <Text className="text-white">Welcome to my Gate</Text>
    </View>
  );
};

export default App;
