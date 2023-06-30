const express = require('express');

const server = express();

server.get('/cookie', (req, res) => {
  res
    .cookie('cookie1', 'dieta mnie nie dotyczy', {
      domain: 'localhost',
      // expires: new Date(Date.now() + 31557600000),
      maxAge: 1000 * 60 * 60,
      httpOnly: true, // frontend has no access to the cookie
      // secure: true, --only https
    })
    .cookie('cookie2', 'dieta mnie nie dotyczy', {
      domain: 'localhost',
      // expires: new Date(Date.now() + 31557600000),
      maxAge: 1000 * 60 * 60,
    })
    .send('hello world');
});

server.get('/logout', (req, res) => {
  res
    .clearCookie('cookie1')
    .clearCookie('cookie2')
    .send('logged out');
});

server.listen(3000);
