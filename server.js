import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

Deno.serve(app.fetch);

app.get('/api', (c) => {
  console.log('aaaaaa');
  return c.json({ message: 'Hello World!' });
});
