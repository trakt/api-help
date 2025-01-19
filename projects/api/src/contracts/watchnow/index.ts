import { builder } from '../_internal/builder.ts';
import type { z } from '../_internal/z.ts';
import {
  type watchNowSourceResponseSchema,
  watchNowSourcesResponseSchema,
} from './_internal/response/watchNowSourcesResponseSchema.ts';

export const watchnow = builder.router({
  sources: {
    path: '/sources',
    method: 'GET',
    responses: {
      200: watchNowSourcesResponseSchema.array(),
    },
  },
}, {
  pathPrefix: '/watchnow',
});

export type WatchNowSourcesResponse = z.infer<
  typeof watchNowSourceResponseSchema
>;
