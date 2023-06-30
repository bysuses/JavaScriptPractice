const express = require('express');
const { CookieRecipe } = require('../src/cookieRecipe');

const cookieRouter = express.Router();

cookieRouter
  .get('/', (req, res) => {
    if (req.cookies.deliciousCookie === undefined) {
      res.render('home', {
        customStylesheet: '<link rel="stylesheet" href="../stylesheets/home.css">',
      });
    } else {
      const cookie = JSON.parse(req.cookies.deliciousCookie);
      res.render('homeWithCookie.hbs', {
        customStylesheet: '<link rel="stylesheet" href="../stylesheets/homeWithCookie.css">',
        dough: cookie.dough,
        toppings: cookie.toppings,
      });
    }
  })
  .get('/generator', (req, res) => {
    const cookieRecipe = new CookieRecipe();
    res.render('generator', {
      customStylesheet: '<link rel="stylesheet" href="../stylesheets/generator.css">',
      doughs: cookieRecipe.doughs,
      toppings: cookieRecipe.toppings,
      recipe: cookieRecipe.returnJson(),
    });
  })
  .post('/generated', (req, res) => {
    res.cookie('deliciousCookie', JSON.stringify(req.body), { maxAge: 1000 * 60 * 15 });
    res.redirect('/');
  });

module.exports = { cookieRouter };
