import { episodeIdsResponseSchema } from '../../../_internal/response/episodeIdsResponseSchema.ts';
import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const ratedEpisodesResponseSchema = z.object({
  rated_at: z.string(),
  rating: z.number().int().min(1).max(10),
  type: z.literal('episode'),
  episode: z.object({
    season: z.number(),
    number: z.number(),
    title: z.string(),
    ids: episodeIdsResponseSchema,
  }),
  show: z.object({
    title: z.string(),
    year: z.number(),
    aired_episodes: z.number(),
    ids: showIdsResponseSchema,
  }),
});
