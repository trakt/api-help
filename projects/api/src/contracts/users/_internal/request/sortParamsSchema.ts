import { z } from '../../../_internal/z.ts';

export const sortEnumSchema = z.enum([
  'rank',
  'added',
  'title',
  'released',
  'unreleased',
  'runtime',
  'popularity',
  'percentage',
  'votes',
]);

export const sortParamsSchema = z.object({
  sort: sortEnumSchema,
});
