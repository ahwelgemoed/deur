import { CompleteUser } from './cloud-prisma-types';

export * from './cloud-prisma-types';
export * from './local-prisma-types';

export * from './redisTypes';
// MQTT Message Types
export enum EMQTTMessageTypes {
  CONNECT = 1,
}
export enum EMQQTTTopics {
  GATES_ONLINE = 'GATES_ONLINE',
  HELP_THIS_USER = 'HELP_THIS_USER',
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
export enum EReasons {
  USER_FOUND_LOCAL_CACHE_RESET = 'USER_FOUND_LOCAL_CACHE_RESET',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  USER_FOUND = 'USER_FOUND',
  USER_NOT_HOME_BUT_ALLOWED = 'USER_NOT_HOME_BUT_ALLOWED',
  USER_NOT_HOME_NOT_ALLOWED = 'USER_NOT_HOME_NOT_ALLOWED',
  USER_HOME_NOT_ALLOWED = 'USER_HOME_NOT_ALLOWED',
}
type LimitedUser = Pick<CompleteUser, 'id' | 'name' | 'isAllowed'>;

export type GateUserResponse = {
  user: LimitedUser | undefined;
  reason: EReasons;
  error: Error | undefined;
};
