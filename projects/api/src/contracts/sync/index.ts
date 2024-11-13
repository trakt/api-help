import { builder } from '../_internal/builder.ts';
import { extendedQuerySchema } from '../_internal/request/extendedQuerySchema.ts';
import type { z } from '../_internal/z.ts';
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

export const sync = builder.router({
  progress,
}, { pathPrefix: '/sync' });

export type UpNextResponse = z.infer<typeof upNextResponseSchema>;
