const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { handleError } = require('./utils/errors');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs.engine({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: [`${__dirname}/views/partials`],
  extname: '.hbs',
  defaultLayout: 'main',
  // helpers: handlebarsHelpers,
}));
app.set('view engine', 'hbs');

app.use('/client', clientRouter);
app.use('/', homeRouter);

app.use(handleError);

app.listen(3000, '0.0.0.0', () => console.log('listening on port localhost:3000/'));
