import axios from 'axios';
import { respondToOpenGateRequest } from '../publish/publishOpenGate';
export async function checkIfUserMayEnter(userId: string, clientId: string) {
  // Do a Rest Call to Local Server to Check USER
  const allowed = await getUserStatus(userId);
  await respondToOpenGateRequest(clientId, allowed ? true : false);
}
async function getUserStatus(userId: string) {
  console.log('🦬 FETCHING USER ', userId);
  const url = `${process.env.BASE_LOCAL_URL}/v1/get-club-user/${userId}`;
  try {
    const response = await axios.get(url);
    const data: { allowed: boolean } = await response.data;
    return data.allowed;
  } catch (error) {
    console.error('error', error);
  }
}
