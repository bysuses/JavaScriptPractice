const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json()); // middlewear decoding incoming jsons
app.use(express.static('public')); // serves front end(localhost:3000/test.html)
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies); // works
  res.send('cookies');
});

app.post('/book', (req, res) => {
  const body = [];
  req.on('data', (data) => {
    body.push(data);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const object = JSON.parse(parsedBody);
    res.send(`${object.title} by ${object.author}`);
  });
});

app.post('/book2', (req, res) => {
  console.log(req.body); // works
  res.send('ok');
});

app.listen(3000);
