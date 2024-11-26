import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { sortDirectionSchema } from '../_internal/response/sortDirectionSchema.ts';
import { profileResponseSchema } from '../_internal/response/userProfileResponseSchema.ts';
import type { z } from '../_internal/z.ts';
import { profileParamsSchema } from './_internal/request/profileParamsSchema.ts';
import { settingsResponseSchema } from './_internal/response/settingsResponseSchema.ts';

export const users = builder.router({
  profile: {
    path: '/:id',
    method: 'GET',
    pathParams: profileParamsSchema,
    responses: {
      200: profileResponseSchema,
    },
  },
  settings: {
    path: '/settings',
    method: 'GET',
    query: extendedQuerySchemaFactory<['browsing']>(),
    responses: {
      200: settingsResponseSchema,
    },
  },
}, {
  pathPrefix: '/users',
});

export type ProfileParams = z.infer<typeof profileParamsSchema>;
export type ProfileResponse = z.infer<typeof profileResponseSchema>;
export type SortDirection = z.infer<typeof sortDirectionSchema>;

export type SettingsResponse = z.infer<typeof settingsResponseSchema>;
