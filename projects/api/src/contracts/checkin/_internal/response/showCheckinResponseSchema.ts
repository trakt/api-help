import { episodeIdsResponseSchema } from '../../../_internal/response/episodeIdsResponseSchema.ts';
import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
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
    ids: episodeIdsResponseSchema,
  }),
  show: z.object({
    title: z.string(),
    year: z.number(),
    ids: showIdsResponseSchema,
  }),
});
