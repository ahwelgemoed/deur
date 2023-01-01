import { Client } from 'client';
import { AedesPublishPacket } from 'packet';
import { EMQQTTTopics } from '@deur/shared-types';
import { checkIfUserMayEnter } from '../restCalls/confirmEntry';

export function clientPublished(packet: AedesPublishPacket, client: Client | null) {
  console.log(`${packet.topic} PUBLISHED`);
  if (packet.topic === EMQQTTTopics.OPEN_GATE) {
  }
  if (packet.topic === EMQQTTTopics.GATES_ONLINE) {
  }
  if (packet.topic === EMQQTTTopics.CONFIRM_ENTRY) {
    if (client?.id && packet.payload) checkIfUserMayEnter(packet.payload.toString(), client.id);
  }
}
