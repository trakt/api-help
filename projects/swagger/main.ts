import { generateOpenApi } from '@ts-rest/open-api';
import { traktContract } from '@trakt/api';
import { Hono } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';

const swaggerJson = generateOpenApi(traktContract, {
  info: {
    title: 'Trakt API',
    version: '2.0.0',
  },
});

export default new Hono()
  .get('/swagger.json', (ctx) => ctx.json(swaggerJson))
  .get('/', swaggerUI({ url: '/swagger.json' }));
