import { builder } from '../_internal/builder.ts';
import { z } from '../_internal/z.ts';
import { movieCheckinRequestSchema } from './_internal/request/movieCheckinRequestSchema.ts';
import { showCheckinRequestSchema } from './_internal/request/showCheckinRequestSchema.ts';
import { checkin409ErrorResponse } from './_internal/response/checkin409ErrorResponse.ts';
import { movieCheckinResponseSchema } from './_internal/response/movieCheckinResponseSchema.ts';
import { showCheckinResponseSchema } from './_internal/response/showCheckinResponseSchema.ts';

export const checkin = builder.router({
  show: {
    method: 'POST',
    path: '',
    body: showCheckinRequestSchema,
    responses: {
      200: showCheckinResponseSchema,
      409: checkin409ErrorResponse,
    },
  },
  movie: {
    method: 'POST',
    path: '',
    body: movieCheckinRequestSchema,
    responses: {
      200: movieCheckinResponseSchema,
      409: checkin409ErrorResponse,
    },
  },
  delete: {
    path: '',
    method: 'DELETE',
    responses: {
      204: z.undefined(),
    },
  },
}, { pathPrefix: '/checkin' });

export type ShowCheckinRequest = z.infer<typeof showCheckinRequestSchema>;
export type ShowCheckinResponse = z.infer<typeof showCheckinResponseSchema>;
export type MovieCheckinRequest = z.infer<typeof movieCheckinRequestSchema>;
export type MovieCheckinResponse = z.infer<typeof movieCheckinResponseSchema>;
export type Checkin409ErrorResponse = z.infer<typeof checkin409ErrorResponse>;
