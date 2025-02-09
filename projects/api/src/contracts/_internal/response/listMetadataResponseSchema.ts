import { z } from '../z.ts';

export const listMetadataResponseSchema = z.object({
  rank: z.number(),
  id: z.number(),
  listed_at: z.string(),
  notes: z.string().nullable(),
});
