const express = require('express');
const cookieParser = require('cookie-parser');
const { routeRouter } = require('./routes/route');

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use('/route', routeRouter);



app.listen(3000, 'localhost');