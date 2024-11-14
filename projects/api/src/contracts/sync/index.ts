import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import type { z } from '../_internal/z.ts';
import { historyRequestSchema } from './_internal/request/historyRequestSchema.ts';
import { historyResponseSchema } from './_internal/response/historyResponseSchema.ts';
import { upNextResponseSchema } from './_internal/response/upNextResponseSchema.ts';

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

export const sync = builder.router({
  history,
  progress,
}, { pathPrefix: '/sync' });

export type UpNextResponse = z.infer<typeof upNextResponseSchema>;
export type HistoryRequest = z.infer<typeof historyRequestSchema>;
export type HistoryResponse = z.infer<typeof historyResponseSchema>;
