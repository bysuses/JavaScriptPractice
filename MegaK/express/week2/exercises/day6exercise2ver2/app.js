const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { calcRouter } = require('./routes/calc');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('public/javascripts'));
app.use('/calc', calcRouter);

app.listen(3000, 'localhost');
