import { z } from '../../../_internal/z.ts';

export const ratedResponseSchema = z.object({
  rated_at: z.string(),
  rating: z.number().int().min(1).max(10),
});
