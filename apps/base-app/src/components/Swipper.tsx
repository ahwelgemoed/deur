import { useMqttMessageListener, useSendMqttMessage } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SwipeButton from 'rn-swipe-button';

// EMQQTTTopics
const Swipper = () => {
  const [gatesOnline, setGatesOnline] = useState<string[]>();
  const [sendMessage] = useSendMqttMessage((e) => console.log('e', e));
  useMqttMessageListener(EMQQTTTopics.GATES_ONLINE, (message) => {
    console.log('message', message);
    setGatesOnline(JSON.parse(Buffer.from(message.payloadBytes).toString()) as any as string[]);
  });

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
                sendMessage(`${gate}/${EMQQTTTopics.OPEN_GATE}`, gate, 2);
              }}
            />
            <Text className="text-right text-xs uppercase text-gray-400">({gate})</Text>
          </View>
        ))}
    </View>
  );
};

export default Swipper;
