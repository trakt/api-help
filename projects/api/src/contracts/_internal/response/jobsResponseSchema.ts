import { z } from '../z.ts';
import { jobResponseSchema } from './jobResponseSchema.ts';

export const jobsResponseSchema = z.object({
  job: z.string(),
  jobs: z.array(jobResponseSchema),
});
