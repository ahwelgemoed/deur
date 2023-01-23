import { Client } from 'aedes:client';
import { gates, GATE_PREFIX } from '../gates';
import { publishGates } from '../publish/publishGatesOnline';

export function clientConnected(client: Client) {
  console.log('🫀-----Client Connected: ', client.id);
  if ((client.id as string).includes(GATE_PREFIX)) {
    console.log('GATE ONLINE CONNECTED');
    gates.addClient(client.id);
    publishGates();
  }
}
