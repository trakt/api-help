import { z } from '../z.ts';

export const pageQuerySchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});
