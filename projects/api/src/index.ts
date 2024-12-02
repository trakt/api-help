import { initClient } from '@ts-rest/core';
import { traktContract } from './contracts/traktContract.ts';
import { Environment } from './Environment.ts';

export type * from './contracts/calendars/index.ts';
export type * from './contracts/movies/index.ts';
export type * from './contracts/oauth/index.ts';
export type * from './contracts/recommendations/index.ts';
export type * from './contracts/search/index.ts';
export type * from './contracts/shows/index.ts';
export type * from './contracts/sync/index.ts';
export type * from './contracts/users/index.ts';

export { Environment, traktContract };

export type TraktApiOptions = {
  /**
   * Trakt API environment target (production, staging, development)
   */
  environment: Environment;
  /**
   * Trakt API key (client id from trakt.tv API application)
   */
  apiKey: string;
  /**
   * Fetch implementation
   */
  fetch?: typeof fetch;
  /**
   * If the request can be cancelled.
   */
  cancellable?: boolean;
};

export type TraktApi = ReturnType<typeof traktApiFactory>;

const controllers = new Map<string, AbortController>();

export function traktApiFactory({
  environment,
  apiKey,
  fetch = globalThis.fetch,
  cancellable,
}: TraktApiOptions) {
  return initClient(traktContract, {
    baseUrl: environment,
    baseHeaders: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': apiKey,
    },
    api: async ({ path, method, body, headers }) => {
      const [pathWithoutQuery = ''] = path.split('?');

      if (controllers.has(pathWithoutQuery) && cancellable) {
        controllers.get(pathWithoutQuery)?.abort();
      }

      const abortController = new AbortController();
      controllers.set(pathWithoutQuery, abortController);

      const result = await fetch(path, {
        method,
        headers,
        body,
        signal: abortController.signal,
      });

      controllers.delete(pathWithoutQuery);

      const contentType = result.headers.get('content-type');

      if (
        contentType?.includes('application/') && contentType?.includes('json')
      ) {
        const response = {
          status: result.status,
          body: await result.json(),
          headers: result.headers,
        };

        return response;
      }

      if (contentType?.includes('text/')) {
        return {
          status: result.status,
          body: await result.text(),
          headers: result.headers,
        };
      }

      return {
        status: result.status,
        body: await result.blob(),
        headers: result.headers,
      };
    },
  });
}

export function traktApi({
  environment = Environment.production,
  apiKey,
  fetch,
}: TraktApiOptions): TraktApi {
  return traktApiFactory({
    environment,
    apiKey,
    fetch,
  });
}
