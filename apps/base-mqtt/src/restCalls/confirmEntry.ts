import { EMQQTTTopics } from '@deur/shared-types';
import axios from 'axios';
import { respondToOpenGateRequest } from '../publish/publishOpenGate';
import { mqttClient } from '../set-up-server';

/**
 * Check if user may enter
 * @param userId Scanned / Entered User ID
 * @param clientId Client ID of the MQTT Client
 */
export async function checkIfUserMayEnter(userId: string, clientId: string) {
  // Do a Rest Call to Local Server to Check USER
  const { isAllowed, requestId } = await getUser(userId);
  // Publish Back to Gate
  await respondToOpenGateRequest(clientId, isAllowed);

  if (!isAllowed) {
    console.log('🚫 USER IS NOT ALLOWED TO ENTER');

    // Push to Kiosks
    mqttClient.publish(
      {
        cmd: 'publish',
        qos: 0,
        dup: false,
        retain: false,
        topic: EMQQTTTopics.HELP_THIS_USER,
        payload: requestId || '',
      },
      (err) => {
        if (err) {
          console.log('err', err);
        }
      }
    );
  }
}

async function getUser(userId: string) {
  console.log('🦬 FETCHING USER ', userId);

  const { id } = JSON.parse(userId) as { id: string };

  const url = `http://127.0.0.1:${process.env.BASE_LOCAL_PORT}/gate/user-gate-check`;
  try {
    const response = await axios.post(url, {
      cardNumber: id,
    });
    const data: { isAllowed: boolean; requestId: string } = await response.data;
    console.log('data', data);
    return { isAllowed: data.isAllowed, requestId: data.requestId };
  } catch (error) {
    console.error('error', error);
    return { isAllowed: false };
  }
}
