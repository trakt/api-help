import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import type { z } from '../_internal/z.ts';
import { profileParamsSchema } from './_internal/request/profileParamsSchema.ts';
import { profileResponseSchema } from './_internal/response/profileResponseSchema.ts';
import { settingsResponseSchema } from './_internal/response/settingsResponseSchema.ts';

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
  settings: {
    path: '/settings',
    method: 'GET',
    responses: {
      200: settingsResponseSchema,
    },
  },
}, {
  pathPrefix: '/users',
});

export type ProfileParams = z.infer<typeof profileParamsSchema>;
export type ProfileResponse = z.infer<typeof profileResponseSchema>;

export type SettingsResponse = z.infer<typeof settingsResponseSchema>;
