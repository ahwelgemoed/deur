import Paho from 'paho-mqtt';
import { useEffect, useRef, useState } from 'react';
import { createMqttName } from '@deur/shared-types';
/**
 * MQTT Hook
 * @returns [mqttClient, isConnected, reconnect]
 *
 */
export function useMqtt(): [
  Paho.Client | undefined,
  boolean,
  () => void
  // (topic: string) => Promise<Paho.Message>
] {
  const [isConnected, setIsConnected] = useState(false);
  const retryInterval = useRef<NodeJS.Timer | number>();
  const mqttClient = useRef<Paho.Client>();

  // mqttClient.current.p

  useEffect(() => {
    createClient();
    return () => {
      if (mqttClient?.current?.isConnected()) {
        mqttClient.current?.disconnect();
      }
    };
  }, []);
  const createClient = () => {
    mqttClient.current = new Paho.Client('127.0.0.1', Number(8080), '/', createMqttName('Mobile'));

    mqttClient.current.connect({
      onSuccess: function () {
        console.log('Connected');
        setIsConnected(mqttClient?.current?.isConnected() || false);
      },
      onFailure: function (err) {
        console.log('Error', err);
      },
    });

    mqttClient.current.onConnectionLost = function () {
      setIsConnected(mqttClient.current?.isConnected() || false);
    };
  };

  useEffect(() => {
    if (mqttClient.current && !mqttClient?.current?.isConnected()) {
      retryInterval.current = setInterval(() => {
        reconnect();
      }, 1000);
    }
    return () => {
      if (retryInterval.current) {
        clearInterval(retryInterval.current);
      }
    };
  }, [isConnected]);

  const reconnect = () => {
    if (!isConnected) {
      createClient();
    }
  };

  return [
    mqttClient.current,
    mqttClient?.current?.isConnected() || false,
    reconnect,
    // listenToTopic,
  ];
}

/**
 * MQTT Message Listener Hook
 * @param topic
 * @param callback
 * @returns [isConnected]
 *
 */

export function useMqttMessageListener(topic: string, callback: (message: Paho.Message) => void) {
  const [mqttClient, isConnected] = useMqtt();

  useEffect(() => {
    if (mqttClient && mqttClient.isConnected()) {
      mqttClient.subscribe(topic);
      mqttClient.onMessageArrived = function (message) {
        callback(message);
      };
    }
    return () => {
      mqttClient?.isConnected() && mqttClient.unsubscribe(topic);
    };
  }, [mqttClient, isConnected]);

  return [isConnected];
}

/**
 * MQTT Message Sender Hook
 * @param callback
 * @returns [sendMessage, isConnected]
 *
 */
export function useSendMqttMessage(
  callback?: (message: Paho.Message) => void
): [
  sendMessage: (topic: string, message: string, qos?: 0 | 1 | 2, retained?: boolean) => void,
  isConnected: boolean
] {
  const [mqttClient, isConnected] = useMqtt();

  const sendMessage = (
    topic: string,
    message: string,
    qos: 0 | 1 | 2 = 0,
    retained = false
  ): void => {
    if (mqttClient && isConnected) {
      mqttClient.send(topic, message, qos, retained);

      mqttClient.onMessageDelivered = function (message) {
        console.log('Message delivered');
        callback && callback(message);
      };
    }
  };

  return [sendMessage, isConnected];
}
