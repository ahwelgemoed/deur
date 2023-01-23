import { z } from 'zod';
import { UserCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';

export const userAllowedCheckRequestSchema = UserCloudModel.pick({
  cardNumber: true,
});
export const userAllowedCheckResponseSchema = z.object({
  isAllowed: z.boolean(),
});
export type UserAllowedCheckRequest = z.infer<typeof userAllowedCheckRequestSchema>;

export const { schemas: gateLocalSchemas, $ref } = buildJsonSchemas({
  userAllowedCheckRequestSchema,
  userAllowedCheckResponseSchema,
});
