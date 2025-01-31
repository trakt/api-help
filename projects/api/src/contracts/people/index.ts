import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import type { z } from '../_internal/z.ts';
import { peopleMovieCreditsResponseSchema } from './_internal/response/peopleMovieCreditsResponseSchema.ts';
import { peopleShowCreditsResponseSchema } from './_internal/response/peopleShowCreditsResponseSchema.ts';
import { peopleSummaryResponseSchema } from './_internal/response/peopleSummaryResponseSchema.ts';

export const people = builder.router({
  summary: {
    path: '/',
    pathParams: idParamsSchema,
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    method: 'GET',
    responses: {
      200: peopleSummaryResponseSchema,
    },
  },
  movies: {
    path: '/movies',
    pathParams: idParamsSchema,
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    method: 'GET',
    responses: {
      200: peopleMovieCreditsResponseSchema,
    },
  },
  shows: {
    path: '/shows',
    pathParams: idParamsSchema,
    query: extendedQuerySchemaFactory<['full', 'images']>(),
    method: 'GET',
    responses: {
      200: peopleShowCreditsResponseSchema,
    },
  },
}, {
  pathPrefix: '/people/:id',
});

export type PeopleSummaryResponse = z.infer<
  typeof peopleSummaryResponseSchema
>;
export type PeopleMovieCreditsResponse = z.infer<
  typeof peopleMovieCreditsResponseSchema
>;
export type PeopleShowCreditsResponse = z.infer<
  typeof peopleShowCreditsResponseSchema
>;
