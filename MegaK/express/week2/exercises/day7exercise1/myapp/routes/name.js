const express = require('express');

const nameRouter = express.Router();

let name = '';

nameRouter
  .get('/set/:name', (req, res) => {
    name = req.params.name;
    res.redirect('/name/show');
  })
  .get('/show', (req, res) => {
    res.send(name);
  });

module.exports = { nameRouter };