const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hi!');
});

// parametry routa
server.get('/article/:articleName/:id', (req, res) => {
  res.send('Hello thy who shalt pic mushrooms!');
});

// id to parametr opcjonalny
server.get('/mushroom/:id/:something?', (req, res) => {
  res.send(`Hello this is mushroom of id:${req.params.id}`);
});

server.get('/JSONIFY/:id/:something?', (req, res) => {
  res.json({ id: req.params.id, something: req.params.something });
});

server.get('/redirection', (req, res) => {
  res.redirect(301, '/article/mushroom/1');
});

server.listen(3000);
