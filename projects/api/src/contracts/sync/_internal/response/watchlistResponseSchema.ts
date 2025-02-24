import { bulkMediaRequestSchema } from '../../../_internal/request/bulkMediaRequestSchema.ts';
import { z } from '../../../_internal/z.ts';

export const watchlistResponseSchema = z.object({
  added: z.object({ movies: z.number(), episodes: z.number() }),
  existing: z.object({ movies: z.number(), episodes: z.number() }),
  not_found: bulkMediaRequestSchema,
  list: z.object({
    updated_at: z.string(),
    item_count: z.number(),
  }),
});
