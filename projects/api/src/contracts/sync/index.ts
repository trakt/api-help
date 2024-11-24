import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import type { z } from '../_internal/z.ts';
import { historyRequestSchema } from './_internal/request/historyRequestSchema.ts';
import { watchlistRequestSchema } from './_internal/request/watchlistRequestSchema.ts';
import { historyResponseSchema } from './_internal/response/historyResponseSchema.ts';
import { upNextResponseSchema } from './_internal/response/upNextResponseSchema.ts';
import { watchlistResponseSchema } from './_internal/response/watchlistResponseSchema.ts';

const progress = builder.router({
  upNext: {
    method: 'GET',
    path: '/up_next',
    query: extendedQuerySchema,
    responses: {
      200: upNextResponseSchema,
    },
  },
}, { pathPrefix: '/progress' });

const history = builder.router({
  add: {
    method: 'POST',
    path: '',
    body: historyRequestSchema,
    responses: {
      200: historyResponseSchema,
    },
  },
}, {
  pathPrefix: '/history',
});

const watchlist = builder.router({
  add: {
    method: 'POST',
    path: '',
    body: watchlistRequestSchema,
    responses: {
      201: watchlistResponseSchema,
    },
  },
}, {
  pathPrefix: '/watchlist',
});

export const sync = builder.router({
  history,
  progress,
  watchlist,
}, { pathPrefix: '/sync' });

export type UpNextResponse = z.infer<typeof upNextResponseSchema>;

export type HistoryRequest = z.infer<typeof historyRequestSchema>;
export type HistoryResponse = z.infer<typeof historyResponseSchema>;

export type WatchlistRequest = z.infer<typeof watchlistRequestSchema>;
export type WatchlistResponse = z.infer<typeof watchlistResponseSchema>;
