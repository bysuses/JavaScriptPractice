const express = require('express');

const routeRouter = express.Router();

routeRouter
  .get('/', (req, res) => {
    res.render('home');
  });

module.exports = { routeRouter };
