import { Client } from 'client';
import { Subscription } from 'packet';
import { EMQQTTTopics } from '@deur/shared-types';
import { publishGates } from '../publish/publishGatesOnline';

export function clientSubscribed(subscriptions: Subscription[], client: Client) {
  subscriptions.forEach((subscription) => {
    console.log('subscription', subscription);
    // If the client is subscribing to the gates topic, and we are Mobile Client, then publish the gates
    if (
      subscription.topic === EMQQTTTopics.GATES_ONLINE &&
      client.id.toLowerCase().includes('mobile')
    ) {
      publishGates();
    }
  });
}
