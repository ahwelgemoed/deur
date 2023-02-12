import { z } from 'zod';
import { CompleteUser, CompleteVisitsToLocation, UserCloudModel } from './cloud-prisma-types';

export * from './cloud-prisma-types';

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

export enum MQMessageTypes {
  USER_IS_ALLOWED = 'USER_IS_ALLOWED',
}
type LimitedUser = Pick<CompleteUser, 'id' | 'name' | 'isAllowed'>;

export type GateUserResponse = {
  user: LimitedUser | undefined;
  reason: EReasons;
  error: Error | undefined;
};

export const CleanUserSchema = UserCloudModel.omit({
  createdAt: true,
  updatedAt: true,
});

export interface ICleanUserSchema extends z.infer<typeof CleanUserSchema> {
  visits: CompleteVisitsToLocation[];
}

export const cloudHeaders = z.object({
  'x-country': z.string(),
  'x-location': z.string(),
});

export type TDeviceSetupData = {
  deviceId: string;
  deviceTypeId: number;
  countryId: string;
  locationId: string;
  friendlyName: string;
};

export { ReasonForVisit } from './reasonTypes';
