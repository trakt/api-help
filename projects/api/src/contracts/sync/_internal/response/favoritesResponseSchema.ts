import { z } from '../../../_internal/z.ts';
import { favoriteParamSchema } from '../request/favoritesParamSchema.ts';

export const favoritesResponseSchema = z.object({
  added: z.object({
    movies: z.number(),
    shows: z.number(),
  }).optional(),
  deleted: z.object({
    movies: z.number(),
    shows: z.number(),
  }).optional(),
  existing: z.object({
    movies: z.number(),
    shows: z.number(),
  }).optional(),
  not_found: favoriteParamSchema,
  list: z.object({
    updated_at: z.string(),
    item_count: z.number(),
  }),
});
