import { z } from '../z.ts';

export const watchedStatsResponseSchema = z.object({
  watcher_count: z.number(),
  play_count: z.number(),
  collected_count: z.number(),
});
