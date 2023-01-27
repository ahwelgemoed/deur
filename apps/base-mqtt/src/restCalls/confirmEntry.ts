import axios from 'axios';
import { respondToOpenGateRequest } from '../publish/publishOpenGate';

/**
 * Check if user may enter
 * @param userId Scanned / Entered User ID
 * @param clientId Client ID of the MQTT Client
 */
export async function checkIfUserMayEnter(userId: string, clientId: string) {
  // Do a Rest Call to Local Server to Check USER
  const { isAllowed } = await getUser(userId);
  // Publish Back to Gate
  await respondToOpenGateRequest(clientId, isAllowed);
}
async function getUser(userId: string) {
  console.log('🦬 FETCHING USER ', userId);

  const { id } = JSON.parse(userId) as { id: string };

  const url = `http://127.0.0.1:${process.env.BASE_LOCAL_PORT}/gate/user-gate-check`;
  try {
    const response = await axios.post(url, {
      cardNumber: id,
    });
    const data: { isAllowed: boolean } = await response.data;
    return { isAllowed: data.isAllowed };
  } catch (error) {
    console.error('error', error);
    return { isAllowed: false };
  }
}
