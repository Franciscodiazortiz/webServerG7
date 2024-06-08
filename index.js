// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello mundo');
});
// starts a simple http server locally on port 3000
server.listen(8097, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:8097');
});
// run with `node server.mjs`