import { builder } from '../_internal/builder.ts';
import { movieListResponseSchema } from './_internal/response/movieListResponseSchema.ts';
import { showListResponseSchema } from './_internal/response/showListResponseSchema.ts';
import { calendarParamsSchema } from './_internal/request/calendarParamsSchema.ts';
import type z from 'zod';

export const calendars = builder.router({
  shows: {
    method: 'GET',
    path: '/:target/shows/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchema,
    },
  },
  newShows: {
    method: 'GET',
    path: '/:target/shows/new/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchema,
    },
  },
  seasonPremieres: {
    method: 'GET',
    path: '/:target/shows/premieres/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchema,
    },
  },
  finales: {
    method: 'GET',
    path: '/:target/shows/finales/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchema,
    },
  },
  movies: {
    method: 'GET',
    path: '/:target/movies/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: movieListResponseSchema,
    },
  },
  dvdReleases: {
    method: 'GET',
    path: '/:target/dvd/:start_date/:days',
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: movieListResponseSchema,
    },
  },
}, { pathPrefix: '/calendars' });

export type CalendarParams = z.infer<typeof calendarRequestParamsSchema>;
export type ShowsResponse = z.infer<typeof showListResponseSchema>;
export type MoviesResponse = z.infer<typeof movieListResponseSchema>;
