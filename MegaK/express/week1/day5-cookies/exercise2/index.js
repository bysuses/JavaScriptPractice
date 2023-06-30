const express = require('express');
const { readFile, writeFile } = require('fs').promises;
const { existsSync } = require('fs');

const server = express();
let names = [];

(async () => {
  if (existsSync('./data/names.json')) {
    const namesJson = await readFile('./data/names.json', { encoding: 'utf-8' });
    names = JSON.parse(namesJson);
  }
})();

server.get('/name/set/:name', async (req, res) => {
  names.push(req.params.name);
  const namesJson = JSON.stringify(names);
  await writeFile('./data/names.json', namesJson);
  res.redirect('/name/show');
});

server.get('/name/show', (req, res) => {
  if (names.length === 0) {
    res.send('');
    return;
  }
  const name = names[names.length - 1];
  res.send(name);
});

server.get('/name/check', (req, res) => {
  if (names[0]) {
    res.send('Name is set.');
  } else {
    res.send('No name has been set.');
  }
});

server.listen(3000);
