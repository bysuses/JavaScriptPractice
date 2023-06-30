const express = require('express');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const { nameRouter } = require('./routes/name');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60, // 1 minute
  max: 10, // Limit each IP to 10 requests per `window`
})

app.use(limiter);
app.use(express.static('views'));
app.use(cookieParser());
app.use('/name', nameRouter);



app.listen(3000, 'localhost');