import { EMQQTTTopics } from '@deur/shared-types';
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
      // iPAD WILL,...should, RESPOND TO THIS
      return mqttClient.publish(
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
    console.log('✅ USER IS ALLOWED TO ENTER', JSON.stringify(isThisCardNumberAllowed, null, 2));
  } catch (error) {
    console.log('MQTT :: checkIfUserMayEnter', error);
  }
}
