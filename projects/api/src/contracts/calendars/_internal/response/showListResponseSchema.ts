import { z } from '../../../_internal/z.ts';

const episodeSchema = z.object({
  season: z.number(),
  number: z.number(),
  title: z.string(),
  ids: z.object({
    trakt: z.number(),
    tvdb: z.number(),
    imdb: z.string(),
    tmdb: z.number(),
  }),
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
});

export const showListResponseSchemaPublic = z.array(
  z.object({
    first_aired: z.string(),
    episode: episodeSchema.extend({
      /*
        Exists only if cloud9 is requested
      */
      images: z.object({ screenshot: z.array(z.string()) }),
    }),
    show: showSchema.extend({
      /*
        Exists only if cloud9 is requested
      */
      images: z.object({
        fanart: z.array(z.string()),
        poster: z.array(z.string()),
        logo: z.array(z.string()),
        clearart: z.array(z.string()),
        banner: z.array(z.string()),
        thumb: z.array(z.string()),
      }),
    }),
  }),
);
