import { z } from '../../../_internal/z.ts';
import { mediaIdsRequestSchema } from './mediaIdsRequestSchema.ts';
import { sharingRequestSchema } from './sharingRequestSchema.ts';

const showAbsoluteCheckinRequestSchema = z.object({
  show: z.object({
    title: z.string(),
    year: z.number(),
    ids: mediaIdsRequestSchema,
  }),
  episode: z.object({ number_abs: z.number() }),
  sharing: sharingRequestSchema,
  message: z.string().optional(),
});

const episodeCheckinRequestSchema = z.object({
  episode: z.object({ ids: mediaIdsRequestSchema }),
  sharing: sharingRequestSchema,
  message: z.string().optional(),
});

const episodeWithShowCheckinRequestSchema = z.object({
  show: z.object({
    title: z.string(),
    year: z.number(),
    ids: mediaIdsRequestSchema,
  }),
  episode: z.object({ season: z.number(), number: z.number() }),
  sharing: sharingRequestSchema,
  message: z.string().optional(),
});

export const showCheckinRequestSchema = z.union([
  episodeCheckinRequestSchema,
  showAbsoluteCheckinRequestSchema,
  episodeWithShowCheckinRequestSchema,
]);
