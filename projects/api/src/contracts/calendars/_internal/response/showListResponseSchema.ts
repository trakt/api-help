import { z } from '../../../_internal/z.ts';

const episodeSchema = z.object({
  season: z.number(),
  number: z.number(),
  title: z.string(),
  /***
   * Available if requesting extended `full`.
   */
  episode_type: z
    .enum([
      `standard`,
      `series_premiere`,
      `season_premiere`,
      `mid_season_finale`,
      `mid_season_premiere`,
      `season_finale`,
      `series_finale`,
    ])
    .optional(),
  ids: z.object({
    trakt: z.number(),
    tvdb: z.number(),
    imdb: z.string(),
    tmdb: z.number(),
  }),
  /***
   * Available if requesting extended `cloud9`.
   */
  images: z
    .object({ screenshot: z.array(z.string()) })
    .optional(),
});

const showSchema = z.object({
  title: z.string(),
  year: z.number(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
    tvdb: z.number(),
    imdb: z.string(),
    tmdb: z.number(),
  }),
  /***
   * Available if requesting extended `cloud9`.
   */
  images: z
    .object({
      fanart: z.array(z.string()),
      poster: z.array(z.string()),
      logo: z.array(z.string()),
      clearart: z.array(z.string()),
      banner: z.array(z.string()),
      thumb: z.array(z.string()),
    })
    .optional(),
});

export const showListResponseSchema = z.array(
  z.object({
    first_aired: z.string(),
    episode: episodeSchema,
    show: showSchema,
  }),
);
