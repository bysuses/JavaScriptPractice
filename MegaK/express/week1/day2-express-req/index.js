/* eslint-disable no-console */
const express = require('express');
const { URLSearchParams } = require('url');

function generateQueryString(params) {
  const queryString = new URLSearchParams(params);
  return `${queryString}`.replace(/\+/g, '%20');
}

console.log(`http://localhost:3000/?${generateQueryString({ name: 'Radek', age: '25' })}`);

const app = express();

const allowedIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1'];
app.all('/', (req, res) => {
  if (allowedIps.includes(req.ip)) {
    console.log('Hello');
  } else {
    console.log('Go away!');
  }

  console.log(req.method);

  const { url, originalUrl, path } = req;
  console.log({ url, originalUrl, path });

  console.log(req.protocol);

  console.log(req.query);

  console.log(req.get('cookie'));

  res.send('hello');
});

app.listen(3000);
