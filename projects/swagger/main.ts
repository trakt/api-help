import { swaggerUI } from '@hono/swagger-ui';
import { traktContract } from '@trakt/api';
import { generateOpenApi } from '@ts-rest/open-api';
import { Hono } from 'hono';

const swaggerJson = generateOpenApi(traktContract, {
  info: {
    title: 'Trakt API',
    version: '2.0.0',
  },
});

export default new Hono()
  .get('/swagger.json', (ctx) => ctx.json(swaggerJson))
  .get('/', swaggerUI({ url: '/swagger.json' }));
