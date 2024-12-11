import { z } from '../z.ts';
import { showResponseSchema } from './showResponseSchema.ts';

export const showAnticipatedResponseSchema = z.array(
  z.object({
    list_count: z.number(),
    show: showResponseSchema,
  }),
);
