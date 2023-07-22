const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { homeRouter } = require('./routers/homeRouter');
const { todoRouter } = require('./routers/todoRouter');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());

app.engine('.hbs', hbs.engine({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/todo', todoRouter);

app.listen(3000, '0.0.0.0');
