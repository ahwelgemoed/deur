import { Client } from 'aedes:client';
import { gates } from '../gates';
import { publishGates } from '../publish/publishGatesOnline';

export function clientConnected(client: Client) {
  console.log('🫀Client Connected: ', client.id);
  if ((client.id as string).includes('mqtt-explorer')) {
    console.log('GATE ONLINE CONNECTED');
    gates.addClient(client.id);
    publishGates();
  }
}
