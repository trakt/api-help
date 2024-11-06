import { builder } from '../_internal/builder.ts';
import { movieListResponseSchema } from './_internal/response/movieListResponseSchema.ts';
import { showListResponseSchemaPublic } from './_internal/response/showListResponseSchema.ts';
import { calendarRequestParamsSchema } from './_internal/request/calendarParamsSchema.ts';
import { z } from '../_internal/z.ts';
import { extendedQuerySchema } from './_internal/request/extendedQuerySchema.ts';

export const calendars = builder.router({
  shows: {
    method: 'GET',
    path: '/:target/shows/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchemaPublic,
    },
  },
  newShows: {
    method: 'GET',
    path: '/:target/shows/new/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchemaPublic,
    },
  },
  seasonPremieres: {
    method: 'GET',
    path: '/:target/shows/premieres/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchemaPublic,
    },
  },
  finales: {
    method: 'GET',
    path: '/:target/shows/finales/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: showListResponseSchemaPublic,
    },
  },
  movies: {
    method: 'GET',
    path: '/:target/movies/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: movieListResponseSchema,
    },
  },
  dvdReleases: {
    method: 'GET',
    path: '/:target/dvd/:start_date/:days',
    query: extendedQuerySchema,
    pathParams: calendarRequestParamsSchema,
    responses: {
      200: movieListResponseSchema,
    },
  },
}, { pathPrefix: '/calendars' });

export type CalendarParams = z.infer<typeof calendarRequestParamsSchema>;
export type ShowsResponse = z.infer<typeof showListResponseSchemaPublic>;
export type MoviesResponse = z.infer<typeof movieListResponseSchema>;
