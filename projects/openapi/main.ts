import { swaggerUI as ui } from '@hono/swagger-ui';
import { Hono } from 'hono';
import { generate } from './generate.ts';

export default new Hono()
  .get('/openapi.json', (ctx) => ctx.json(generate()))
  .get('/', ui({ url: '/openapi.json' }));
