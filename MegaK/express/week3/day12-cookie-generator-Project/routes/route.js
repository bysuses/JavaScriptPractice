const express = require('express');
const { CookieRecipe } = require('../src/cookieRecipe');

const cookieRouter = express.Router();

cookieRouter
  .get('/', (req, res) => {
    res.render('home', {
      customStylesheet: '<link rel="stylesheet" href="../stylesheets/home.css">',
    });
  })
  .get('/generator', (req, res) => {
    const cookieRecipe = new CookieRecipe();
    res.render('generator', {
      customStylesheet: '<link rel="stylesheet" href="../stylesheets/generator.css">',
      doughs: cookieRecipe.doughs,
      toppings: cookieRecipe.toppings,
      recipe: cookieRecipe.returnJson(),
    });
  });

module.exports = { cookieRouter };
