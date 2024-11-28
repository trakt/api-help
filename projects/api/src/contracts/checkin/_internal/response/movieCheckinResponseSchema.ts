import { movieIdsResponseSchema } from '../../../_internal/response/movieIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const movieCheckinResponseSchema = z.object({
  id: z.number(),
  watched_at: z.string(),
  sharing: z.object({
    twitter: z.boolean(),
    mastodon: z.boolean(),
    tumblr: z.boolean(),
  }),
  movie: z.object({
    title: z.string(),
    year: z.number(),
    ids: movieIdsResponseSchema,
  }),
});
