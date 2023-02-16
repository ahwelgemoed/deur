import { cloudHeaders } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const subscriptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export const allSubscriptions = z.array(subscriptionSchema);

export const { schemas: subscriptionSchemas, $ref } = buildJsonSchemas(
  {
    allSubscriptions,
    cloudHeaders,
  },
  { $id: 'subscriptions' }
);
