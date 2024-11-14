import { assertType, type IsExact } from '@std/testing/types';

import type { HistoryRequest } from './index.ts';

Deno.test('@types/HistoryRequest: movie with id', () => {
  const movieWithId: HistoryRequest = {
    movies: [
      {
        ids: {
          imdb: 'tt1234567',
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          slug: 'movie-slug',
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tmdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          trakt: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tmdb: 123456,
        },
      },
    ],
  };

  assertType<IsExact<typeof movieWithId, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: movie should not work with tvdb', () => {
  const movieWithTvdb = {
    movies: [
      {
        ids: {
          tvdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof movieWithTvdb, HistoryRequest>>(false);
});

Deno.test('@types/HistoryRequest: movie with title and year', () => {
  const movieWithTitleAndYear: HistoryRequest = {
    movies: [
      {
        title: 'Movie Title',
        year: 2021,
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        title: 'Movie Title',
        year: 2021,
      },
    ],
  };

  assertType<IsExact<typeof movieWithTitleAndYear, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: movie must be identifiable', () => {
  const emptyIds = {
    movies: [
      {
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof emptyIds, HistoryRequest>>(false);
});

Deno.test('@types/HistoryRequest: show with id', () => {
  const showWithId: HistoryRequest = {
    shows: [
      {
        ids: {
          imdb: 'tt1234567',
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          slug: 'show-slug',
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tmdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          trakt: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tvdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof showWithId, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: show with title and year', () => {
  const showWithTitleAndYear: HistoryRequest = {
    shows: [
      {
        title: 'Show Title',
        year: 2021,
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof showWithTitleAndYear, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: show with season', () => {
  const showWithSeason: HistoryRequest = {
    shows: [
      {
        ids: {
          imdb: 'tt1234567',
        },
        seasons: [
          {
            number: 1,
            watched_at: '2021-01-01T00:00:00Z',
            episodes: [],
          },
        ],
      },
    ],
  };

  assertType<IsExact<typeof showWithSeason, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: show with episode in season', () => {
  const showWithEpisodeInSeason: HistoryRequest = {
    shows: [
      {
        title: 'Show Title',
        year: 2021,
        seasons: [
          {
            number: 1,
            episodes: [
              {
                number: 1,
                watched_at: '2021-01-01T00:00:00Z',
              },
            ],
          },
        ],
      },
    ],
  };

  assertType<IsExact<typeof showWithEpisodeInSeason, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: show must be identifiable', () => {
  const emptyIds = {
    shows: [
      {
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof emptyIds, HistoryRequest>>(false);
});

Deno.test('@types/HistoryRequest: season with id', () => {
  const season: HistoryRequest = {
    seasons: [
      {
        ids: {
          trakt: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tvdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof season, HistoryRequest>>(true);
});

Deno.test('@types/HistoryRequest: season should not allow tmdb ids', () => {
  const seasonWithTmdb = {
    seasons: [
      {
        ids: {
          tmdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof seasonWithTmdb, HistoryRequest>>(false);
});

Deno.test('@types/HistoryRequest: episode with id', () => {
  const episode: HistoryRequest = {
    episodes: [
      {
        ids: {
          trakt: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
      {
        ids: {
          tvdb: 123456,
        },
        watched_at: '2021-01-01T00:00:00Z',
      },
    ],
  };

  assertType<IsExact<typeof episode, HistoryRequest>>(true);
});
