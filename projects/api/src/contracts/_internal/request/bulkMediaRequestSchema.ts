import { z } from '../z.ts';
import {
  episodeIdsRequestSchema,
  movieIdsRequestSchema,
  seasonIdsRequestSchema,
  showIdsRequestSchema,
} from './idsRequestSchema.ts';

const watchedAtSchema = z.object({
  watched_at: z.string().optional(),
});

const watchWithTileAndYearSchema = z.object({
  title: z.string(),
  year: z.number(),
}).merge(watchedAtSchema);

const watchWithSeasonsSchema = z
  .object({
    seasons: z.array(
      z.object({
        number: z.number(),
        episodes: z.array(
          z.object({
            number: z.number(),
          }).merge(watchedAtSchema),
        ),
      }).merge(watchedAtSchema),
    ).optional(),
  }).merge(watchedAtSchema);

const addMovieToHistorySchema = z
  .union([
    z.object({
      ids: movieIdsRequestSchema,
    }).merge(watchedAtSchema),
    watchWithTileAndYearSchema,
  ]);

const watchShowWithIdsSchema = z
  .object({
    ids: showIdsRequestSchema,
  }).merge(watchedAtSchema);

const addShowToHistorySchema = z
  .union([
    watchShowWithIdsSchema,
    watchWithTileAndYearSchema,
    watchShowWithIdsSchema.merge(watchWithSeasonsSchema),
    watchWithTileAndYearSchema.merge(watchWithSeasonsSchema),
  ]);

const addSeasonToHistorySchema = z
  .object({
    ids: seasonIdsRequestSchema,
  })
  .merge(watchedAtSchema)
  .merge(watchWithSeasonsSchema);

const addEpisodeToHistorySchema = z
  .object({
    ids: episodeIdsRequestSchema,
  }).merge(watchedAtSchema);

export const bulkMediaRequestSchema = z.object({
  movies: z.array(addMovieToHistorySchema).optional(),
  shows: z.array(addShowToHistorySchema).optional(),
  seasons: z.array(addSeasonToHistorySchema).optional(),
  episodes: z.array(addEpisodeToHistorySchema).optional(),
});
