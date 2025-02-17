import { episodeIdsResponseSchema } from '../../../_internal/response/episodeIdsResponseSchema.ts';
import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

const ratedResponseSchema = z.object({
  rated_at: z.string(),
  rating: z.number().int().min(1).max(10),
});

const ratedEpisodesResponseSchema = ratedResponseSchema.extend({
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

const ratedMoviesResponseSchema = ratedResponseSchema.extend({
  type: z.literal('movie'),
  movie: movieResponseSchema,
});

const ratedShowsResponseSchema = ratedResponseSchema.extend({
  type: z.literal('show'),
  show: showResponseSchema,
});

export const RatedItemResponseSchema = z.discriminatedUnion('type', [
  ratedEpisodesResponseSchema,
  ratedMoviesResponseSchema,
  ratedShowsResponseSchema,
]);
