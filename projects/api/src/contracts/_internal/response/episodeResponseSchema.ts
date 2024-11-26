import { z } from '../z.ts';
import { episodeIdsResponseSchema } from './episodeIdsResponseSchema.ts';

export const episodeResponseSchema = z.object({
  season: z.number(),
  number: z.number(),
  title: z.string(),
  first_aired: z.string(),
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
  ids: episodeIdsResponseSchema,
  /***
   * Available if requesting extended `cloud9`.
   */
  images: z
    .object({ screenshot: z.array(z.string()) })
    .optional(),
});
