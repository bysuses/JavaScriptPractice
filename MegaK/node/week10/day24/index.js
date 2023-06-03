const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html',
  });
  res.end('<h1>hello from Radek</h1>');
});
server.listen(3000, 'localhost');
