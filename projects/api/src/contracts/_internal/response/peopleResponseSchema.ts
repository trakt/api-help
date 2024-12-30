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
]);

const personSchema = z.object({
  name: z.string(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
    imdb: z.string().optional(),
    tmdb: z.number().optional(),
  }),
});

const castSchema = z.object({
  character: z.string(),
  characters: z.array(z.string()),
  person: personSchema,
});

export const crewSchema = z.object({
  job: jobResponseSchema,
  jobs: z.array(jobResponseSchema),
  person: personSchema,
});

export const peopleResponseSchema = z.object({
  cast: z.array(castSchema).optional(),
  crew: z.record(
    crewPositions,
    z.array(crewSchema),
  ).optional(),
});
