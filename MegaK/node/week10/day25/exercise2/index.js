/* eslint-disable linebreak-style */
const { createServer } = require('http');
const { calculate } = require('./calculator');

const server = createServer();
server.on('request', async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });

  const [, operator, firstNumber, secondNumber] = req.url.split('/');
  const result = calculate(operator, Number(firstNumber), Number(secondNumber));
  res.write(`${result}`);

  res.end();
});
server.listen(3000, 'localhost');
