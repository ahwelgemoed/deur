import { View, Text } from '@deur/design-system';
import { useMqttMessageListener, useSendMqttMessage } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import React, { useRef, useState } from 'react';
import SwipeButton from 'rn-swipe-button';
import { v4 as uuidv4 } from 'uuid';
interface ISwipper {
  successCallback: () => void;
}
// EMQQTTTopics
const Swipper = ({ successCallback }: ISwipper) => {
  const uuid = useRef(uuidv4());
  const [gatesOnline, setGatesOnline] = useState<string[]>();

  // Send message to open gate
  const [sendMessage] = useSendMqttMessage((e) => console.log('e', e));

  // Collect all gates online
  useMqttMessageListener(EMQQTTTopics.GATES_ONLINE, (message) => {
    console.log('👇message', message);
    setGatesOnline(JSON.parse(Buffer.from(message.payloadBytes).toString()) as unknown as string[]);
  });
  // Listen for gate opened
  useMqttMessageListener(uuid.current, (message) => {
    console.log('🔥message', message);
    successCallback();
  });

  // TODO Display success when gate is opened
  console.log('uuid.current', uuid.current, gatesOnline);

  return (
    <View className="w-[400px]">
      {gatesOnline &&
        gatesOnline.map((gate, i) => (
          <View className="flex justify-center" key={i}>
            <Text className="text-center text-xl uppercase py-6">Gate {i + 1}</Text>
            <SwipeButton
              key={gate}
              disableResetOnTap
              railBackgroundColor="#000"
              railStyles={{
                backgroundColor: '#7ad2bdb0',
                borderColor: '#4aad41bd',
              }}
              thumbIconBackgroundColor="#FFFFFF"
              titleColor="#FFFFFF"
              title="Slide to open"
              onSwipeSuccess={() => {
                sendMessage(`${gate}/${EMQQTTTopics.OPEN_GATE}`, uuid.current, 2);
              }}
            />
            <Text className="text-right text-xs uppercase text-gray-400">({gate})</Text>
          </View>
        ))}
    </View>
  );
};

export default Swipper;
