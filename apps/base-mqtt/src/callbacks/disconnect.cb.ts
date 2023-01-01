import { Client } from "aedes:client";
import { gates } from "../gates";

export function clientDisconnect(client: Client) {
  console.log("Client Disconnected: ", client.id);
  if ((client.id as string).includes("mqtt-explorer")) {
    console.log("MQTT-EXPLORER CONNECTED");
    gates.removeClient(client.id);
    // publishGates();
  }
}
