import { EMQQTTTopics } from '@deur/shared-types';
import axios from 'axios';
import { respondToOpenGateRequest } from '../publish/publishOpenGate';
import { localTrpcClientInstance, mqttClient } from '../set-up-server';

/**
 * Check if user may enter
 * @param userId Scanned / Entered User ID
 * @param clientId Client ID of the MQTT Client
 */
export async function checkIfUserMayEnter(userId: string, clientId: string) {
  try {
    const cardNumber = JSON.parse(userId).cardNumber;

    const isThisCardNumberAllowed = await localTrpcClientInstance.canThisUserBeLetInToTheClub.query(
      {
        cardNumber,
      }
    );

    await respondToOpenGateRequest(clientId, isThisCardNumberAllowed.isAllowed); // REPLAYS TO GATE - OVER MQTT
    if (!isThisCardNumberAllowed.isAllowed) {
      console.log(
        '🚫 USER IS NOT ALLOWED TO ENTER',
        JSON.stringify(isThisCardNumberAllowed, null, 2)
      );
      // iPAD WILL RESPOND TO THIS
      mqttClient.publish(
        {
          cmd: 'publish',
          qos: 0,
          dup: false,
          retain: false,
          topic: EMQQTTTopics.HELP_THIS_USER,
          payload: cardNumber,
        },
        (err) => {
          if (err) {
            console.log('err', err);
          }
        }
      );
    }
  } catch (error) {
    console.log('MQTT :: checkIfUserMayEnter', error);
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
