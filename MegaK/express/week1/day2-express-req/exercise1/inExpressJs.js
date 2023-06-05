const express = require('express');

const app = express();

app.all('/', (req, res) => {
  const userAgent = req.get('user-agent');
  res.send(`${userAgent} Hello, World from back-end!`);
});
app.listen(3000);
