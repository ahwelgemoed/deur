import { z } from 'zod';
import { ReasonForVisit, UserCloudModel } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';

export const userAllowedCheckRequestSchema = UserCloudModel.pick({
  cardNumber: true,
});
export const userAllowedCheckResponseSchema = z.object({
  isAllowed: z.boolean(),
  requestId: z.string(),
});
export type UserAllowedCheckRequest = z.infer<typeof userAllowedCheckRequestSchema>;

export const { schemas: gateLocalSchemas, $ref } = buildJsonSchemas({
  userAllowedCheckRequestSchema,
  userAllowedCheckResponseSchema,
});
