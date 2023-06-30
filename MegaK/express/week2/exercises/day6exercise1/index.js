/* eslint-disable no-plusplus */
const express = require('express');

const app = express();
let yes = 0;
let no = 0;

app.use(express.static('public'));

app.get('/vote/:yesNo', (req, res) => {
  if (req.params.yesNo === 'yes') yes++;
  if (req.params.yesNo === 'no') no++;
  res.redirect('/');
});

app.get('/votes/check', (req, res) => {
  res.send(`<p>Voted yes: ${yes.toString()}</p><p>Voted no: ${no.toString()}</p>`);
});

app.listen(3000);
