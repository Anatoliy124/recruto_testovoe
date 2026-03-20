import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  const name    = c.req.query('name')    || 'World'
  const message = c.req.query('message') || 'Привет'

  return c.html(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div>
    <h1>Hello ${name}!</h1>
    <p>${message}</p>
  </div>
</body>
</html>`)
})

const port =  4000
console.log('http://localhost:' + port)
serve({ fetch: app.fetch, port: Number(port) })
