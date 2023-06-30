/* eslint-disable no-plusplus */
const express = require('express');

const app = express();

app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const body = [];
  req.on('data', (data) => {
    body.push(data);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const [numberA, numberB] = parsedBody.split('&').map((x) => Number(x.split('=')[1]));
    if (numberA % numberB === 0) res.send('B jest dzielnikiem liczby A');
    else res.send('B nie jest dzielnikiem liczby A');
  });
});

app.listen(3000);
