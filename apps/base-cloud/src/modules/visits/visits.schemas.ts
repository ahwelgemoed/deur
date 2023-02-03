import { cloudHeaders } from '@deur/shared-types';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const logVisit = z.object({
  cardNumber: z.string(),
});

export interface UserBodyVisit extends z.infer<typeof logVisit> {}

export const logVisitReturn = z.object({
  id: z.string(),
});

export const { schemas: visitSchemas, $ref } = buildJsonSchemas(
  {
    logVisitReturn,
    cloudHeaders,
    logVisit,
  },
  { $id: 'visitSchemas' }
);
