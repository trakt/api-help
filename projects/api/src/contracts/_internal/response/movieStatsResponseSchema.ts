import { z } from '../z.ts';
import { episodeStatsResponseSchema } from './episodeStatsResponseSchema.ts';

export const movieStatsResponseSchema = episodeStatsResponseSchema.extend({
  favorited: z.number(),
  recommended: z.number(),
});
