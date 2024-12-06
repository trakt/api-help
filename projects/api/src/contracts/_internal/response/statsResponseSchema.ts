import { z } from '../z.ts';

export const statsResponseSchema = z.object({
  play_count: z.number(),
  minutes_watched: z.number(),
  minutes_left: z.number(),
});
