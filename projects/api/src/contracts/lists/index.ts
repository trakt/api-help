import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import { listedMovieResponseSchema } from '../_internal/response/listedMovieResponseSchema.ts';
import { listedShowResponseSchema } from '../_internal/response/listedShowResponseSchema.ts';

export const lists = builder.router({
  items: builder.router({
    movies: {
      path: '/items/movies',
      method: 'GET',
      pathParams: idParamsSchema,
      query: extendedQuerySchemaFactory<['full', 'images']>()
        .merge(pageQuerySchema),
      responses: {
        200: listedMovieResponseSchema.array(),
      },
    },
    shows: {
      path: '/items/shows',
      method: 'GET',
      pathParams: idParamsSchema,
      query: extendedQuerySchemaFactory<['full', 'images']>()
        .merge(pageQuerySchema),
      responses: {
        200: listedShowResponseSchema.array(),
      },
    },
  }),
}, {
  pathPrefix: '/lists/:id',
});
