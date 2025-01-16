import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const favoritedShowsResponseSchema = z.object({
  id: z.number(),
  listed_at: z.string(),
  notes: z.string().nullable(),
  type: z.literal('show'),
  show: showResponseSchema,
  rank: z.number(),
});
