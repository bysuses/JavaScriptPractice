/* eslint-disable no-plusplus */
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));

app.post('/cookie/set', (req, res) => {
  const { name } = req.body;
  res
    .cookie('cookieRememberingName', name, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    })
    .send('zapisano imię');
});

app.get('/cookie/show', (req, res) => {
  const name = req.cookies.cookieRememberingName;
  res.send(name || 'Brak imienia');
});

app.get('/cookie/check', (req, res) => {
  if (req.cookies.cookieRememberingName) res.send('imię zapisano');
  else res.send('imienia nie zapisano');
});

app.listen(3000);
