import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import type { sortDirectionSchema } from '../_internal/response/sortDirectionSchema.ts';
import { profileResponseSchema } from '../_internal/response/userProfileResponseSchema.ts';
import type { z } from '../_internal/z.ts';
import { dateRangeParamsSchema } from './_internal/request/dateRangeParamsSchema.ts';
import { profileParamsSchema } from './_internal/request/profileParamsSchema.ts';
import {
  type sortEnumSchema,
  sortParamsSchema,
} from './_internal/request/sortParamsSchema.ts';
import { historyMoviesResponseSchema } from './_internal/response/historyMoviesResponseSchema.ts';
import { historyShowsResponseSchema } from './_internal/response/historyShowsResponseSchema.ts';
import { settingsResponseSchema } from './_internal/response/settingsResponseSchema.ts';
import type { watchActionSchema } from './_internal/response/watchActionSchema.ts';
import { watchedMoviesResponseSchema } from './_internal/response/watchedMoviesResponseSchema.ts';
import { watchedShowsResponseSchema } from './_internal/response/watchedShowsResponseSchema.ts';
import { watchlistedMoviesResponseSchema } from './_internal/response/watchlistedMoviesResponseSchema.ts';
import { watchlistedShowsResponseSchema } from './_internal/response/watchlistedShowsResponseSchema.ts';

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
  watched: builder.router({
    movies: {
      path: '/movies',
      method: 'GET',
      pathParams: profileParamsSchema,
      responses: {
        200: watchedMoviesResponseSchema,
      },
    },
    shows: {
      path: '/shows',
      method: 'GET',
      query: extendedQuerySchemaFactory<['noseasons']>(),
      responses: {
        200: watchedShowsResponseSchema,
      },
    },
  }, {
    pathPrefix: '/:id/watched',
  }),
  history: builder.router({
    movies: {
      path: '/movies',
      method: 'GET',
      pathParams: profileParamsSchema,
      query: extendedQuerySchemaFactory<['full', 'cloud9']>()
        .merge(dateRangeParamsSchema)
        .merge(pageQuerySchema),
      responses: {
        200: historyMoviesResponseSchema,
      },
    },
    shows: {
      path: '/shows',
      method: 'GET',
      query: extendedQuerySchemaFactory<['full', 'cloud9']>()
        .merge(dateRangeParamsSchema)
        .merge(pageQuerySchema),
      responses: {
        200: historyShowsResponseSchema,
      },
    },
  }, {
    pathPrefix: '/:id/history',
  }),
  watchlist: builder.router({
    movies: {
      path: '/movies/:sort',
      pathParams: profileParamsSchema.merge(sortParamsSchema),
      method: 'GET',
      query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
      responses: {
        200: watchlistedMoviesResponseSchema,
      },
    },
    shows: {
      path: '/shows/:sort',
      pathParams: profileParamsSchema.merge(sortParamsSchema),
      method: 'GET',
      query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
      responses: {
        200: watchlistedShowsResponseSchema,
      },
    },
  }, {
    pathPrefix: '/:id/watchlist',
  }),
}, {
  pathPrefix: '/users',
});

export type ProfileParams = z.infer<typeof profileParamsSchema>;
export type ProfileResponse = z.infer<typeof profileResponseSchema>;
export type SortDirection = z.infer<typeof sortDirectionSchema>;
export type WatchAction = z.infer<typeof watchActionSchema>;
export type SortType = z.infer<typeof sortEnumSchema>;

export type SettingsResponse = z.infer<typeof settingsResponseSchema>;

export type WatchedMoviesResponse = z.infer<typeof watchedMoviesResponseSchema>;
export type WatchedShowsResponse = z.infer<typeof watchedShowsResponseSchema>;

export type HistoryMoviesResponse = z.infer<typeof historyMoviesResponseSchema>;
export type HistoryShowsResponse = z.infer<typeof historyShowsResponseSchema>;

export type WatchlistedMoviesResponse = z.infer<
  typeof watchlistedMoviesResponseSchema
>;
export type WatchlistedShowsResponse = z.infer<
  typeof watchlistedShowsResponseSchema
>;
