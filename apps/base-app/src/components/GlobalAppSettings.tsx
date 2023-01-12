import { useMqttMessageListener } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import { useRouter } from 'expo-router';
import React from 'react';

const GlobalAppSettings = ({ children }: any) => {
  const router = useRouter();
  const [_isConnected] = useMqttMessageListener(EMQQTTTopics.HELP_THIS_USER, (message) => {
    console.log('message', message);
    const json = JSON.parse(message.payloadString);
    console.log('json', json);
    if (json.reason) {
      console.log('json', json);
      router.push({ pathname: '/gate-actions/help-this-user', params: { id: json.user.id } });
    }
  });

  console.log('_isConnected', _isConnected);
  return <>{children}</>;
};

export default GlobalAppSettings;
