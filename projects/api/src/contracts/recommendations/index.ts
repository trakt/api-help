import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { z } from '../_internal/z.ts';
import { hideParamsSchema } from './request/hideParamsSchema.ts';
import { recommendationsQuerySchema } from './request/recommendationsQuerySchema.ts';
import { recommendedMovieResponse } from './response/recommendedMovieResponse.ts';
import { recommendedShowResponse } from './response/recommendedShowResponse.ts';

const movies = builder.router({
  recommend: {
    path: '/',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>()
      .merge(recommendationsQuerySchema),
    responses: {
      200: recommendedMovieResponse,
    },
  },
  hide: {
    path: '/:id',
    method: 'DELETE',
    pathParams: hideParamsSchema,
    responses: {
      204: z.undefined(),
    },
  },
}, { pathPrefix: '/movies' });

const shows = builder.router({
  recommend: {
    path: '/',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>()
      .merge(recommendationsQuerySchema),
    responses: {
      200: recommendedShowResponse,
    },
  },
  hide: {
    path: '/:id',
    method: 'DELETE',
    pathParams: hideParamsSchema,
    responses: {
      204: z.undefined(),
    },
  },
}, { pathPrefix: '/shows' });

export const recommendations = builder.router({
  movies,
  shows,
}, {
  pathPrefix: '/recommendations',
});

export type HideRecommendationParams = z.infer<typeof hideParamsSchema>;
export type RecommendedMovieResponse = z.infer<typeof recommendedMovieResponse>;
export type RecommendedShowResponse = z.infer<typeof recommendedShowResponse>;
