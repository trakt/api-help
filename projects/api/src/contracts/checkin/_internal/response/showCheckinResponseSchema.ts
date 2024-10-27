import { z } from '../../../_internal/z.ts';

export const showCheckinResponseSchema = z.object({
  id: z.number(),
  watched_at: z.string(),
  sharing: z.object({
    twitter: z.boolean(),
    mastodon: z.boolean(),
    tumblr: z.boolean(),
  }),
  episode: z.object({
    season: z.number(),
    number: z.number(),
    title: z.string(),
    ids: z.object({
      trakt: z.number(),
      tvdb: z.number(),
      imdb: z.string(),
      tmdb: z.number(),
    }),
  }),
  show: z.object({
    title: z.string(),
    year: z.number(),
    ids: z.object({
      trakt: z.number(),
      slug: z.string(),
      tvdb: z.number(),
      imdb: z.string(),
      tmdb: z.number(),
    }),
  }),
});
