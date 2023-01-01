import { EMQQTTTopics } from "@deur/shared-types";
import { gates } from "../gates";
import { mqttClient } from "../set-up-server";

export const publishGates = async () => {
  mqttClient.publish(
    {
      cmd: "publish",
      qos: 0,
      dup: false,
      retain: false,
      topic: EMQQTTTopics.GATES_ONLINE,
      payload: JSON.stringify(gates.getGates()),
    },
    (err) => {
      if (err) {
        console.log("err", err);
      }
    },
  );
};
