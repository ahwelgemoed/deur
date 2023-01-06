import { useMqttMessageListener } from '@deur/shared-hooks';
import { Layout } from 'expo-router';
import React from 'react';

const GlobalAppSettings = ({ children }: any) => {
  const { navigation } = Layout.useContext();
  const [_isConnected] = useMqttMessageListener('HELP_THIS_USER', (message) => {
    const json = JSON.parse(message.payloadString);
    if (json.name) {
      console.log('json', json);
      // @ts-ignore
      navigation.push('gate-actions/help-this-user', { member: json });
    }
  });
  return <>{children}</>;
};

export default GlobalAppSettings;
