const express = require('express');

const routeRouter = express.Router();

routeRouter
  .get('/', (req, res) => {
    res.render('home', {
      firstName: 'Radek',
    });
  })
  .get('/id', (req, res) => {
    res.render('idCard', {
      id: {
        name: 'Radek',
        surname: 'Bys',
        age: 25,
        profession: 'NEET',
      },
      dates: [1997, 1998, 2004, 2009],
    });
  });

module.exports = { routeRouter };
