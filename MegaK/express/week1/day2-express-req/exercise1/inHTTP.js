const { createServer } = require('http');

const server = createServer();

server.on('request', async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello, World from back-end!');
  res.end();
});

server.listen(3000, 'localhost');
