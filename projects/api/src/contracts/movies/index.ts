import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { movieResponseSchema } from '../_internal/response/movieResponseSchema.ts';
import type { z } from '../_internal/z.ts';
import { idParamsSchema } from './request/idParamsSchema.ts';

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
}, {
  pathPrefix: '/movies',
});

export type MovieIdParams = z.infer<typeof idParamsSchema>;
export type MovieResponse = z.infer<typeof movieResponseSchema>;
