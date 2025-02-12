import { traktContract } from '@trakt/api';
import { generateOpenApi } from '@ts-rest/open-api';

export function generate(): ReturnType<typeof generateOpenApi> {
  return generateOpenApi(traktContract, {
    info: {
      title: 'Trakt API',
      version: '2.0.0',
    },
  });
}

if (import.meta.main) {
  await Deno.writeTextFile('openapi.json', JSON.stringify(generate(), null, 2));
}
