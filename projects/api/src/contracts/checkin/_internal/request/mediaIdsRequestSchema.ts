import { z } from '../../../_internal/z.ts';

export const mediaIdsRequestSchema = z.union([
  z.object({
    trakt: z.number(),
    slug: z.string().optional(),
    imdb: z.string().optional(),
    tmdb: z.number().optional(),
  }),
  z.object({
    trakt: z.number().optional(),
    slug: z.string(),
    imdb: z.string().optional(),
    tmdb: z.number().optional(),
  }),
  z.object({
    trakt: z.number().optional(),
    slug: z.string().optional(),
    imdb: z.string(),
    tmdb: z.number().optional(),
  }),
  z.object({
    trakt: z.number().optional(),
    slug: z.string().optional(),
    imdb: z.string().optional(),
    tmdb: z.number(),
  }),
]);
