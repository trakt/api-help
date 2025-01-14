import { builder } from '../_internal/builder.ts';
import { extendedQuerySchemaFactory } from '../_internal/request/extendedQuerySchemaFactory.ts';
import { idParamsSchema } from '../_internal/request/idParamsSchema.ts';
import type { z } from '../_internal/z.ts';
import { peopleSummaryResponseSchema } from './_internal/response/peopleSummaryResponseSchema.ts';

export const people = builder.router({
  summary: {
    path: '/:id',
    pathParams: idParamsSchema,
    query: extendedQuerySchemaFactory<['full', 'cloud9']>(),
    method: 'GET',
    responses: {
      200: peopleSummaryResponseSchema,
    },
  },
}, {
  pathPrefix: '/people',
});

export type PeopleSummaryResponse = z.infer<
  typeof peopleSummaryResponseSchema
>;
