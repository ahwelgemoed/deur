import Aedes from 'aedes';
import { createServer } from 'http';
import { createServer as netServer } from 'net';
import websocketStream from 'websocket-stream';

import { clientConnected } from './callbacks/connected.cb';
import { clientDisconnect } from './callbacks/disconnect.cb';
import { clientSubscribed } from './callbacks/subscribe.cb';
import { clientUnsubscribed } from './callbacks/unsubscribe.cb';
import { clientPublished } from './callbacks/publish.cb';

const MQTT_PORT = 1881;
const MQTT_WS_PORT = 8080;
const mqttClient = new Aedes();

const mqttServerConnection = netServer(mqttClient.handle as any);
const httpServer = createServer();

websocketStream.createServer({ server: httpServer }, mqttClient.handle as any);

const startServer = async () => {
  httpServer.listen(MQTT_WS_PORT, function () {
    console.log('HTTP server listening on port', MQTT_WS_PORT);
  });

  mqttServerConnection.listen(MQTT_PORT, function () {
    console.log('MQTT server started and listening on port ', MQTT_PORT);
  });
};

mqttClient.on('client', clientConnected);

mqttClient.on('clientDisconnect', clientDisconnect);

mqttClient.on('subscribe', clientSubscribed);

mqttClient.on('unsubscribe', clientUnsubscribed);

mqttClient.on('publish', clientPublished);

export { startServer, mqttClient };
