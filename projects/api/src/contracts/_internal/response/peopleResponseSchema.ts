import { z } from '../z.ts';
import { jobResponseSchema } from './jobResponseSchema.ts';

const crewPositions = z.enum([
  'production',
  'art',
  'crew',
  'costume & make-up',
  'directing',
  'writing',
  'sound',
  'camera',
  'lighting',
  'visual effects',
  'editing',
  'creator',
  'created by',
]);

const headshotSchema = z.object({
  headshot: z.array(z.string()),
});

const personSchema = z.object({
  name: z.string(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
    imdb: z.string().nullable(),
    tmdb: z.number().nullable(),
  }),
  /***
   * Available if requesting extended `cloud9`.
   */
  images: headshotSchema.extend({
    fanart: z.array(z.string()),
  }).optional(),
});

export const castSchema = z.object({
  character: z.string(),
  characters: z.array(z.string()),
  episode_count: z.number().optional(),
  person: personSchema,
  /***
   * Available if requesting extended `cloud9`.
   */
  images: headshotSchema.optional(),
});

export const crewSchema = z.object({
  job: z.string(),
  jobs: z.array(jobResponseSchema),
  person: personSchema,
  episode_count: z.number().optional(),
  /***
   * Available if requesting extended `cloud9`.
   */
  images: headshotSchema.optional(),
});

export const peopleResponseSchema = z.object({
  cast: z.array(castSchema).optional(),
  crew: z.record(
    crewPositions,
    z.array(crewSchema),
  ).optional(),
});
