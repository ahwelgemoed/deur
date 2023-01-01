import { Client } from "client";
import { gates } from "../gates";
import { publishGates } from "../publish/publishGatesOnline";

export function clientUnsubscribed(subscriptions: string[], client: Client) {
  if ((client.id as string).includes("mqtt-explorer")) {
    console.log("GATE ONLINE OFFLINE");
    gates.removeClient(client.id);
    publishGates();
  }
}
