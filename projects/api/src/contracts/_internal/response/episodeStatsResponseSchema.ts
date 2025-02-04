import { z } from '../z.ts';

export const episodeStatsResponseSchema = z.object({
  watchers: z.number(),
  plays: z.number(),
  collectors: z.number(),
  comments: z.number(),
  lists: z.number(),
  votes: z.number(),
});
