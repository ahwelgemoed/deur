export * from './redisTypes';
// MQTT Message Types
export enum EMQTTMessageTypes {
  CONNECT = 1,
}
export enum EMQQTTTopics {
  GATES_ONLINE = 'GATES_ONLINE',
  OPEN_GATE = 'OPEN_GATE',
  CONFIRM_ENTRY = 'CONFIRM_ENTRY',
  OPEN = 'OPEN',
}

type TMqttClient = 'Mobile' | 'Web' | 'Server' | 'Gate';

export function createMqttName(type: TMqttClient): string {
  return `${type}-${(Math.random() * 100).toString()}`;
}

export interface IMqttLocalToApp {
  name: string;
  reason: string;
}
