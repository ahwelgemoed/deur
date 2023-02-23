import { z } from 'zod';
import { ReasonForVisit, UserCloudModel, ICleanUserSchema } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';

export const userAllowedCheckRequestSchema = UserCloudModel.pick({
  cardNumber: true,
});

export const HelpUserReply = UserCloudModel.omit({
  createdAt: true,
  updatedAt: true,
}).extend({
  errorId: z.string(),
  reason: z.enum([ReasonForVisit.NOT_FEASIBLE, ReasonForVisit.NOT_USER]),
  visits: z.array(
    z.object({
      id: z.string(),
      userId: z.string(),
      locationId: z.string(),
      createdAt: z.date(),
      updatedAt: z.string(),
    })
  ),
});

export const userAllowedCheckResponseSchema = z.object({
  isAllowed: z.boolean(),
  requestId: z.string(),
});

export const userHelpRequestParams = z.object({
  id: z.string(),
});
export type UserHelpAtGate = z.infer<typeof userHelpRequestParams>;
export type UserAllowedCheckRequest = z.infer<typeof userAllowedCheckRequestSchema>;

export const { schemas: gateLocalSchemas, $ref } = buildJsonSchemas({
  userAllowedCheckRequestSchema,
  HelpUserReply,
  userHelpRequestParams,
  userAllowedCheckResponseSchema,
});
