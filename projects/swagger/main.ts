import { swaggerUI } from '@hono/swagger-ui';
import { Hono } from 'hono';
import { generate } from './generate.ts';

const swaggerJson = generate();

export default new Hono()
  .get('/swagger.json', (ctx) => ctx.json(swaggerJson))
  .get('/', swaggerUI({ url: '/swagger.json' }));
