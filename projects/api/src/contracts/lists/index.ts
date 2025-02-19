import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import { listedMovieResponseSchema } from '../_internal/response/listedMovieResponseSchema.ts';
import { listedShowResponseSchema } from '../_internal/response/listedShowResponseSchema.ts';
import { z } from '../_internal/z.ts';
import { searchTypeParamFactory } from '../search/_internal/request/searchTypeParamFactory.ts';

export const lists = builder.router({
  items: {
    path: '/items/:type',
    method: 'GET',
    pathParams: idParamsSchema
      .merge(
        searchTypeParamFactory<
          ['movie', 'show']
        >(),
      ),
    query: extendedQuerySchemaFactory<['full', 'images']>()
      .merge(pageQuerySchema),
    responses: {
      200: z.union([listedMovieResponseSchema, listedShowResponseSchema])
        .array(),
    },
  },
}, {
  pathPrefix: '/lists/:id',
});
