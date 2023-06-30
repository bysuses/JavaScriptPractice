const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const { cookieRouter } = require('./routes/route');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use('/cookie', cookieRouter);
app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'hbs');
app.engine('.hbs', handlebars.engine({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`,
  extname: '.hbs',
  defaultLayout: 'main',
}));

app.get('/', (req, res) => res.redirect('/cookie')); // redirection to the main page

app.listen(3000, 'localhost');