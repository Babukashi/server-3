import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

Deno.serve(app.fetch);

app.get('/api', (c) => {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  console.log('aaaaaa');
  return c.json(data);
});
