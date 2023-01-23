import { Client } from 'aedes:client';
import { gates, GATE_PREFIX } from '../gates';
import { publishGates } from '../publish/publishGatesOnline';

export function clientDisconnect(client: Client) {
  console.log('Client Disconnected: ', client.id);
  if ((client.id as string).includes(GATE_PREFIX)) {
    gates.removeClient(client.id);
    publishGates();
  }
}
