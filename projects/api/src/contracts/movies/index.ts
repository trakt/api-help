import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { languageParamsSchema } from '../_internal/request/languageParamsSchema.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import type { genreResponseSchema } from '../_internal/response/genreResponseSchema.ts';
import { mediaStatsResponseSchema } from '../_internal/response/mediaStatsResponseSchema.ts';
import { movieAnticipatedResponseSchema } from '../_internal/response/movieAnticipatedResponseSchema.ts';
import { movieResponseSchema } from '../_internal/response/movieResponseSchema.ts';
import { movieTrendingResponseSchema } from '../_internal/response/movieTrendingResponseSchema.ts';
import { ratingsResponseSchema } from '../_internal/response/ratingsResponseSchema.ts';
import { translationResponseSchema } from '../_internal/response/translationResponseSchema.ts';
import type { z } from '../_internal/z.ts';

const ENTITY_LEVEL = builder.router({
  summary: {
    path: '',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
    pathParams: idParamsSchema,
    responses: {
      200: movieResponseSchema,
    },
  },
  ratings: {
    path: '/ratings',
    method: 'GET',
    query: extendedQuerySchemaFactory<['all']>(),
    pathParams: idParamsSchema,
    responses: {
      200: ratingsResponseSchema,
    },
  },
  stats: {
    path: '/stats',
    method: 'GET',
    pathParams: idParamsSchema,
    responses: {
      200: mediaStatsResponseSchema,
    },
  },
  translations: {
    path: '/translations/:language',
    method: 'GET',
    pathParams: idParamsSchema.merge(languageParamsSchema),
    responses: {
      200: translationResponseSchema,
    },
  },
}, {
  pathPrefix: '/:id',
});

const GLOBAL_LEVEL = builder.router({
  trending: {
    path: '/trending',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>()
      .merge(pageQuerySchema),
    responses: {
      200: movieTrendingResponseSchema,
    },
  },
  anticipated: {
    path: '/anticipated',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>()
      .merge(pageQuerySchema),
    responses: {
      200: movieAnticipatedResponseSchema,
    },
  },
  popular: {
    path: '/popular',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>()
      .merge(pageQuerySchema),
    responses: {
      200: movieResponseSchema.array(),
    },
  },
});

export const movies = builder.router({
  ...ENTITY_LEVEL,
  ...GLOBAL_LEVEL,
}, {
  pathPrefix: '/movies',
});

export type MovieIdParams = z.infer<typeof idParamsSchema>;
export type MovieResponse = z.infer<typeof movieResponseSchema>;
export type MovieRatingsResponse = z.infer<typeof ratingsResponseSchema>;
export type Genre = z.infer<typeof genreResponseSchema>;
export type MovieStatsResponse = z.infer<typeof mediaStatsResponseSchema>;
export type MovieTranslationResponse = z.infer<
  typeof translationResponseSchema
>;
export type MovieTrendingResponse = z.infer<
  typeof movieTrendingResponseSchema
>;
export type MovieAnticipatedResponse = z.infer<
  typeof movieAnticipatedResponseSchema
>;
