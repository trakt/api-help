import { z } from 'zod';
import { builder } from './_internal/builder.ts';

const showsResponseSchema = z.array(
    z.object({
        first_aired: z.string(),
        episode: z.object({
            season: z.number(),
            number: z.number(),
            title: z.string(),
            ids: z.object({
                trakt: z.number(),
                tvdb: z.null(),
                imdb: z.string(),
                tmdb: z.number(),
            }),
        }),
        show: z.object({
            title: z.string(),
            year: z.number(),
            ids: z.object({
                trakt: z.number(),
                slug: z.string(),
                tvdb: z.number(),
                imdb: z.string(),
                tmdb: z.number(),
            }),
        }),
    }),
);

const movieResponseSchema = z.array(
    z.object({
        released: z.string(),
        movie: z.object({
            title: z.string(),
            year: z.number(),
            ids: z.object({
                trakt: z.number(),
                slug: z.string(),
                imdb: z.string(),
                tmdb: z.number(),
            }),
        }),
    }),
);

const calendarParamsSchema = z.object({
    target: z.enum(['my', 'all']),
    start_date: z.string({
        description:
            'The start date of the calendar. Must be formatted as "YYYY-MM-DD".',
    }),
    days: z.number({
        description: 'The number of days to retrieve.',
    }),
});

export type CalendarParams = z.infer<typeof calendarParamsSchema>;

export const calendars = builder.router({
    shows: {
        method: 'GET',
        path: '/:target/shows/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: showsResponseSchema,
        },
    },
    newShows: {
        method: 'GET',
        path: '/:target/shows/new/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: showsResponseSchema,
        },
    },
    seasonPremieres: {
        method: 'GET',
        path: '/:target/shows/premieres/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: showsResponseSchema,
        },
    },
    finales: {
        method: 'GET',
        path: '/:target/shows/finales/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: showsResponseSchema,
        },
    },
    movies: {
        method: 'GET',
        path: '/:target/movies/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: movieResponseSchema,
        },
    },
    dvdReleases: {
        method: 'GET',
        path: '/:target/dvd/:start_date/:days',
        pathParams: calendarParamsSchema,
        responses: {
            200: movieResponseSchema,
        },
    },
}, { pathPrefix: '/calendars' });
