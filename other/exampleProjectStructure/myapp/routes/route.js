const express = require('express');

const routeRouter = express.Router();

routeRouter
  .get('/', (req, res) => {
    res.send('hello');
  })

module.exports = { routeRouter };