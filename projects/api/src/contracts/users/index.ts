import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import type { z } from '../_internal/z.ts';
import { profileParamsSchema } from './_internal/request/profileParamsSchema.ts';
import { profileResponseSchema } from './_internal/response/profileResponseSchema.ts';

export const users = builder.router({
  profile: {
    path: '/:id',
    method: 'GET',
    pathParams: profileParamsSchema,
    query: extendedQuerySchema,
    responses: {
      200: profileResponseSchema,
    },
  },
}, {
  pathPrefix: '/users',
});

export type ProfileParams = z.infer<typeof profileParamsSchema>;
export type ProfileResponse = z.infer<typeof profileResponseSchema>;
