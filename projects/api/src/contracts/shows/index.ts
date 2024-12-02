import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { showResponseSchema } from '../_internal/response/showResponseSchema.ts';
import type { z } from '../_internal/z.ts';
import { ratingsResponseSchema } from '../movies/_internal/response/ratingsResponseSchema.ts';
import { showQueryParamsSchema } from './_internal/request/showQueryParamsSchema.ts';
import { showProgressResponseSchema } from './_internal/response/showProgressResponseSchema.ts';

export const shows = builder.router({
  summary: {
    path: '/:id',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
    pathParams: idParamsSchema,
    responses: {
      200: showResponseSchema,
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
  progress: builder.router({
    watched: {
      path: '/watched',
      method: 'GET',
      pathParams: idParamsSchema,
      query: extendedQuerySchemaFactory<['full', 'cloud9']>().merge(
        showQueryParamsSchema,
      ),
      responses: {
        200: showProgressResponseSchema,
      },
    },
  }, {
    pathPrefix: '/:id/progress',
  }),
}, {
  pathPrefix: '/shows',
});

export type ShowIdParams = z.infer<typeof idParamsSchema>;
export type ShowRatingsResponse = z.infer<typeof ratingsResponseSchema>;
export type ShowResponse = z.infer<typeof showResponseSchema>;
export type ShowProgressResponse = z.infer<typeof showProgressResponseSchema>;
export type ShowQueryParams = z.infer<typeof showQueryParamsSchema>;
