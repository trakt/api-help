import { z } from '../../../_internal/z.ts';
import { historyRequestSchema } from '../request/historyRequestSchema.ts';

export const historyResponseSchema = z.object({
  added: z.object({ movies: z.number(), episodes: z.number() }),
  updated: z.object({ movies: z.number(), episodes: z.number() }),
  not_found: historyRequestSchema,
});
