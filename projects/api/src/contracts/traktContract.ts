import { builder } from './_internal/builder.ts';
import { calendars } from './calendars/index.ts';
import { checkin } from './checkin/index.ts';
import { movies } from './movies/index.ts';
import { oauth } from './oauth/index.ts';
import { people } from './people/index.ts';
import { recommendations } from './recommendations/index.ts';
import { search } from './search/index.ts';
import { shows } from './shows/index.ts';
import { sync } from './sync/index.ts';
import { users } from './users/index.ts';
import { watchnow } from './watchnow/index.ts';

export const traktContract = builder
  .router({
    oauth,
    calendars,
    checkin,
    users,
    sync,
    recommendations,
    movies,
    shows,
    search,
    people,
    watchnow,
  });
