import axios from 'axios';
import { CompleteUser, EMQQTTTopics } from '@deur/shared-types';
import { respondToOpenGateRequest } from '../publish/publishOpenGate';
import { EReasons } from '@deur/shared-types';
import { mqttClient } from '../set-up-server';

export async function checkIfUserMayEnter(userId: string, clientId: string) {
  // Do a Rest Call to Local Server to Check USER
  const user = await getUser(userId);
  await respondToOpenGateRequest(clientId, user?.allowed);

  if (!user?.allowed) {
    // Publish to REACT NATIVE
    mqttClient.publish(
      {
        cmd: 'publish',
        qos: 0,
        dup: false,
        retain: false,
        topic: EMQQTTTopics.HELP_THIS_USER,
        payload: JSON.stringify(user),
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
  const url = `localhost${process.env.BASE_LOCAL_PORT}/gate/user-gate-check`;
  try {
    const response = await axios.post(url, {
      cardNumber: userId,
    });
    const data: { user: CompleteUser; allowed: boolean; reason: EReasons } = await response.data;
    return data;
  } catch (error) {
    console.error('error', error);
  }
}
