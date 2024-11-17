import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import { z } from '../_internal/z.ts';
import { hideParamsSchema } from './request/hideParamsSchema.ts';
import { recommendationsQuerySchema } from './request/recommendationsQuerySchema.ts';
import { recommendedMovieResponse } from './response/recommendedMovieResponse.ts';

const movies = builder.router({
  recommend: {
    path: '/',
    method: 'GET',
    query: extendedQuerySchema
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

export const recommendations = builder.router({
  movies,
}, {
  pathPrefix: '/recommendations',
});

export type HideRecommendationParams = z.infer<typeof hideParamsSchema>;
export type RecommendedMovieResponse = z.infer<typeof recommendedMovieResponse>;
