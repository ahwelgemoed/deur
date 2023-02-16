import { EMQQTTTopics } from '@deur/shared-types';
import { CompleteUser } from '@deur/shared-types';
import { mqttClient } from '../set-up-server';

/**
 * Publish to GATE
 * @param clientId
 * @param isAllowed
 */
export const respondToOpenGateRequest = async (clientId: string, isAllowed: boolean) => {
  console.log('isAllowed', isAllowed);

  // Publish to GATE
  mqttClient.publish(
    {
      cmd: 'publish',
      qos: 0,
      dup: false,
      retain: false,
      topic: `${clientId}/${EMQQTTTopics.OPEN}`,
      payload: isAllowed ? '1' : '0',
    },
    (err) => {
      if (err) {
        console.log('err', err);
      }
    }
  );
};
