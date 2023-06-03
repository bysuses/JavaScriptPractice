/* eslint-disable linebreak-style */
const { createServer } = require('http');
const { writeFile } = require('fs').promises;
const { existsSync, readFileSync } = require('fs');

const server = createServer();
let requestCount;
if (existsSync('./requestCounter.txt')) {
  const requestString = readFileSync('./requestCounter.txt', { encoding: 'utf-8' });
  requestCount = Number(requestString);
} else {
  requestCount = 0;
}
server.on('request', async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  if (req.url === '/home') {
    res.write(`<html>Total requests: ${requestCount += 1}</html>`);
    await writeFile('./requestCounter.txt', String(requestCount));
  }
  res.end();
});
server.listen(3000, 'localhost');
