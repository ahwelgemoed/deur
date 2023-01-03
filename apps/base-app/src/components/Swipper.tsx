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
    setGatesOnline(JSON.parse(Buffer.from(message.payloadBytes).toString()) as any as string[]);
  });

  return (
    <View>
      {gatesOnline &&
        gatesOnline.map((gate, i) => (
          <View className="flex justify-center">
            <Text className="text-center text-xl uppercase py-6">Gate {i + 1}</Text>
            <SwipeButton
              key={gate}
              disableResetOnTap
              railBackgroundColor="#000"
              railStyles={{
                backgroundColor: '#4aad41bd',
                borderColor: '#4aad41bd',
              }}
              thumbIconBackgroundColor="#FFFFFF"
              titleColor="#FFFFFF"
              title="Slide to unlock"
              onSwipeSuccess={() => {
                sendMessage(EMQQTTTopics.OPEN_GATE, gate, 2);
              }}
            />
          </View>
        ))}
    </View>
  );
};

export default Swipper;
