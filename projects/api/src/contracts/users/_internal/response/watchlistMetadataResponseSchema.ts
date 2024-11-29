import { z } from '../../../_internal/z.ts';

export const watchlistMetadataResponseSchema = z.object({
  rank: z.number(),
  id: z.number(),
  listed_at: z.string(),
  notes: z.string().nullable(),
  type: z.string(),
});
