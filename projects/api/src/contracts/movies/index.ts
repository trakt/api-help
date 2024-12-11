import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { languageParamsSchema } from '../_internal/request/languageParamsSchema.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import type { genreResponseSchema } from '../_internal/response/genreResponseSchema.ts';
import { movieAnticipatedResponseSchema } from '../_internal/response/movieAnticipatedResponseSchema.ts';
import { movieResponseSchema } from '../_internal/response/movieResponseSchema.ts';
import { movieTrendingResponseSchema } from '../_internal/response/movieTrendingResponseSchema.ts';
import { ratingsResponseSchema } from '../_internal/response/ratingsResponseSchema.ts';
import { translationResponseSchema } from '../_internal/response/translationResponseSchema.ts';
import { z } from '../_internal/z.ts';

export const movies = builder.router({
  summary: {
    path: '/:id',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
    pathParams: idParamsSchema,
    responses: {
      200: movieResponseSchema,
    },
  },
  ratings: {
    path: '/:id/ratings',
    method: 'GET',
    query: extendedQuerySchemaFactory<['all']>(),
    pathParams: idParamsSchema,
    responses: {
      200: ratingsResponseSchema,
    },
  },
  translations: {
    path: '/:id/translations/:language',
    method: 'GET',
    pathParams: idParamsSchema.merge(languageParamsSchema),
    responses: {
      200: translationResponseSchema,
    },
  },
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
}, {
  pathPrefix: '/movies',
});

export type MovieIdParams = z.infer<typeof idParamsSchema>;
export type MovieResponse = z.infer<typeof movieResponseSchema>;
export type MovieRatingsResponse = z.infer<typeof ratingsResponseSchema>;
export type Genre = z.infer<typeof genreResponseSchema>;
export type MovieTranslationResponse = z.infer<
  typeof translationResponseSchema
>;
export type MovieTrendingResponse = z.infer<
  typeof movieTrendingResponseSchema
>;
export type MovieAnticipatedResponse = z.infer<
  typeof movieAnticipatedResponseSchema
>;
