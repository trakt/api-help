import { z } from '../../../_internal/z.ts';
import { historyRequestSchema } from '../request/historyRequestSchema.ts';

export const watchlistResponseSchema = z.object({
  added: z.object({ movies: z.number(), episodes: z.number() }),
  existing: z.object({ movies: z.number(), episodes: z.number() }),
  not_found: historyRequestSchema,
  list: z.object({
    updated_at: z.string(),
    item_count: z.number(),
  }),
});
