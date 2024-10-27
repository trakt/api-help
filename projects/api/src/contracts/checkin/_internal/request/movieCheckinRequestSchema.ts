import { z } from '../../../_internal/z.ts';
import { mediaIdsRequestSchema } from './mediaIdsRequestSchema.ts';
import { sharingRequestSchema } from './sharingRequestSchema.ts';

export const movieCheckinRequestSchema = z.object({
  movie: z.object({
    title: z.string().optional(),
    year: z.number().optional(),
    ids: mediaIdsRequestSchema,
  }),
  sharing: sharingRequestSchema,
  message: z.string().optional(),
});
