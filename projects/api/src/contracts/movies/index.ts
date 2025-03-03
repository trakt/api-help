import { builder } from '../_internal/builder.ts';
import { commentsSortParamsSchema } from '../_internal/request/commentsSortParamsSchema.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import { ignoreQuerySchema } from '../_internal/request/ignoreQuerySchema.ts';
import { languageParamsSchema } from '../_internal/request/languageParamsSchema.ts';
import { pageQuerySchema } from '../_internal/request/pageQuerySchema.ts';
import { watchNowParamsSchema } from '../_internal/request/watchNowParamsSchema.ts';
import { commentReponseSchema } from '../_internal/response/commentResponseSchema.ts';
import type { genreResponseSchema } from '../_internal/response/genreResponseSchema.ts';
import type { jobResponseSchema } from '../_internal/response/jobResponseSchema.ts';
import { listResponseSchema } from '../_internal/response/listResponseSchema.ts';
import { listSortSchema } from '../_internal/response/listSortSchema.ts';
import { listTypeSchema } from '../_internal/response/listTypeSchema.ts';
import { movieAnticipatedResponseSchema } from '../_internal/response/movieAnticipatedResponseSchema.ts';
import type { movieCertificationResponseSchema } from '../_internal/response/movieCertificationResponseSchema.ts';
import { movieResponseSchema } from '../_internal/response/movieResponseSchema.ts';
import { movieStatsResponseSchema } from '../_internal/response/movieStatsResponseSchema.ts';
import { movieTrendingResponseSchema } from '../_internal/response/movieTrendingResponseSchema.ts';
import {
  type castSchema,
  type crewSchema,
  peopleResponseSchema,
} from '../_internal/response/peopleResponseSchema.ts';
import { ratingsResponseSchema } from '../_internal/response/ratingsResponseSchema.ts';
import type { statusResponseSchema } from '../_internal/response/statusResponseSchema.ts';
import { studioResponseSchema } from '../_internal/response/studioResponseSchema.ts';
import { translationResponseSchema } from '../_internal/response/translationResponseSchema.ts';
import { profileResponseSchema } from '../_internal/response/userProfileResponseSchema.ts';
import {
  watchNowResponseSchema,
  type watchNowServiceResponseSchema,
} from '../_internal/response/watchNowResponseSchema.ts';
import type { z } from '../_internal/z.ts';

const ENTITY_LEVEL = builder.router({
  summary: {
    path: '',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    pathParams: idParamsSchema,
    responses: {
      200: movieResponseSchema,
    },
  },
  ratings: {
    path: '/ratings',
    method: 'GET',
    query: extendedQuerySchemaFactory<['all']>(),
    pathParams: idParamsSchema,
    responses: {
      200: ratingsResponseSchema,
    },
  },
  stats: {
    path: '/stats',
    method: 'GET',
    pathParams: idParamsSchema,
    responses: {
      200: movieStatsResponseSchema,
    },
  },
  translations: {
    path: '/translations/:language',
    method: 'GET',
    pathParams: idParamsSchema.merge(languageParamsSchema),
    responses: {
      200: translationResponseSchema,
    },
  },
  related: {
    path: '/related',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    pathParams: idParamsSchema,
    responses: {
      200: movieResponseSchema.array(),
    },
  },
  watching: {
    path: '/watching',
    method: 'GET',
    pathParams: idParamsSchema,
    query: extendedQuerySchemaFactory<['full']>(),
    responses: {
      200: profileResponseSchema.array(),
    },
  },
  studios: {
    path: '/studios',
    method: 'GET',
    pathParams: idParamsSchema,
    responses: {
      200: studioResponseSchema.array(),
    },
  },
  watchnow: {
    path: '/watchnow/:country',
    method: 'GET',
    pathParams: watchNowParamsSchema,
    responses: {
      200: watchNowResponseSchema,
    },
  },
  people: {
    path: '/people',
    method: 'GET',
    query: extendedQuerySchemaFactory<['images']>(),
    pathParams: idParamsSchema,
    responses: {
      200: peopleResponseSchema,
    },
  },
  lists: {
    path: '/lists/:type/:sort',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>()
      .merge(pageQuerySchema),
    pathParams: idParamsSchema
      .merge(listSortSchema)
      .merge(listTypeSchema),
    responses: {
      200: listResponseSchema.array(),
    },
  },
  comments: {
    path: '/comments/:sort',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    pathParams: idParamsSchema.merge(commentsSortParamsSchema),
    responses: {
      200: commentReponseSchema.array(),
    },
  },
}, {
  pathPrefix: '/:id',
});

const GLOBAL_LEVEL = builder.router({
  trending: {
    path: '/trending',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>()
      .merge(pageQuerySchema)
      .merge(ignoreQuerySchema),
    responses: {
      200: movieTrendingResponseSchema.array(),
    },
  },
  anticipated: {
    path: '/anticipated',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>()
      .merge(pageQuerySchema)
      .merge(ignoreQuerySchema),
    responses: {
      200: movieAnticipatedResponseSchema.array(),
    },
  },
  popular: {
    path: '/popular',
    method: 'GET',
    query: extendedQuerySchemaFactory<['full', 'images']>()
      .merge(pageQuerySchema)
      .merge(ignoreQuerySchema),
    responses: {
      200: movieResponseSchema.array(),
    },
  },
});

export const movies = builder.router({
  ...ENTITY_LEVEL,
  ...GLOBAL_LEVEL,
}, {
  pathPrefix: '/movies',
});

export type MovieIdParams = z.infer<typeof idParamsSchema>;
export type MovieResponse = z.infer<typeof movieResponseSchema>;
export type MovieRatingsResponse = z.infer<typeof ratingsResponseSchema>;
export type Genre = z.infer<typeof genreResponseSchema>;
export type StatusResponse = z.infer<typeof statusResponseSchema>;
export type Job = z.infer<typeof jobResponseSchema>;
export type StudioResponse = z.infer<typeof studioResponseSchema>;
export type WatchNowResponse = z.infer<typeof watchNowResponseSchema>;
export type WatchNowServiceResponse = z.infer<
  typeof watchNowServiceResponseSchema
>;
export type MovieStatsResponse = z.infer<typeof movieStatsResponseSchema>;
export type PeopleResponse = z.infer<typeof peopleResponseSchema>;
export type CrewResponse = z.infer<typeof crewSchema>;
export type CastResponse = z.infer<typeof castSchema>;
export type ListResponse = z.infer<typeof listResponseSchema>;
export type CommentResponse = z.infer<typeof commentReponseSchema>;

export type MovieTranslationResponse = z.infer<
  typeof translationResponseSchema
>;
export type MovieTrendingResponse = z.infer<
  typeof movieTrendingResponseSchema
>;
export type MovieAnticipatedResponse = z.infer<
  typeof movieAnticipatedResponseSchema
>;
export type MovieCertificationResponse = z.infer<
  typeof movieCertificationResponseSchema
>;
