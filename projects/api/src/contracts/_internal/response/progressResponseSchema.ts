import { z } from '../z.ts';
import { episodeResponseSchema } from './episodeResponseSchema.ts';
import { statsResponseSchema } from './statsResponseSchema.ts';

export const progressResponseSchema = z.object({
  aired: z.number(),
  completed: z.number(),
  last_watched_at: z.string(),
  reset_at: z.null(),
  next_episode: episodeResponseSchema,
  last_episode: episodeResponseSchema.or(z.null()),
  /***
   * Available if requesting include_stats `true`.
   */
  stats: statsResponseSchema.optional(),
});
