import { z } from 'zod';

export const calendarRequestParamsSchema = z.object({
  target: z.enum(['my', 'all']),
  start_date: z.string({
    description:
      'The start date of the calendar. Must be formatted as "YYYY-MM-DD".',
  }),
  days: z.number({
    description: 'The number of days to retrieve.',
  }),
});
