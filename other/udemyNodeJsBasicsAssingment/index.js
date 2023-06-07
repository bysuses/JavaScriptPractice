const { createServer } = require('http');
const { readFile } = require('fs').promises;

const server = createServer();

server.on('request', async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    const htmlText = await readFile('./homepage.html', { encoding: 'utf-8' });
    res.write(htmlText);
    res.end();
    return;
  }
  if (req.url === '/users') {
    res.writeHead(200, { 'content-type': 'text/html' });
    const htmlText = await readFile('./dummyUsers.html', { encoding: 'utf-8' });
    res.write(htmlText);
    res.end();
    return;
  }
  if (req.url === '/add-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (data) => {
      body.push(data);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    res.end();
    return;
  }
});

server.listen(3000, 'localhost');