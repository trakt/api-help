import { z } from '../../../_internal/z.ts';

export const sortEnumSchema = z.enum([
  'rank',
  'added',
  'title',
  'released',
  'runtime',
  'popularity',
  'percentage',
  'votes',
]);

// FIXME split up param & response schemas
export const sortParamsSchema = z.object({
  sort: sortEnumSchema,
});
