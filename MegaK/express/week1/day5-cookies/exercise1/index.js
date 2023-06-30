const express = require('express');

const server = express();

server.get('/numberssum/:number1/:number2', (req, res) => {
  const sum = Number(req.params.number1) + Number(req.params.number2);
  res.send(`Sum of the two numbers: ${sum}`);
});

server.listen(3000);
