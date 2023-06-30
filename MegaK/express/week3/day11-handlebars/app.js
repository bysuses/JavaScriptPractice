const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const { routeRouter } = require('./routes/route');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use('/route', routeRouter);

app.set('view engine', 'hbs');
app.engine('.hbs', handlebars.engine({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`,
  extname: '.hbs',
  defaultLayout: 'main',
}));

app.listen(3000, 'localhost');
