import { EMQQTTTopics } from '@deur/shared-types';
import { mqttClient } from '../set-up-server';

export const respondToOpenGateRequest = async (clientId: string, allowed: boolean) => {
  mqttClient.publish(
    {
      cmd: 'publish',
      qos: 0,
      dup: false,
      retain: false,
      topic: `${clientId}/${EMQQTTTopics.OPEN}`,
      payload: allowed ? '1' : '0',
    },
    (err) => {
      if (err) {
        console.log('err', err);
      }
    }
  );
};
