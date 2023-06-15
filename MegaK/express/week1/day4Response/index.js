const express = require('express');
const { join } = require('path');

const server = express();

server.get('/image', (req, res) => {
  // res.sendFile(join(__dirname, 'image.jpg')); //must be an absolute path
  res
    .set({
      'X-Powered-By': 'HELLO',
      Connection: 'close',
    })
    .sendFile('image.jpg', {
      root: join(__dirname, 'files'), // can  be used instead of absolute path
    });
});

server.get('/download-image', (req, res) => {
  res.attachment('image.jpg', {
    root: join(__dirname, 'files'),
  });
  res.end();
});

server.get('/cookie', (req, res) => {
  res
    .cookie('cookiename', 'cookievalue') // cookie is a header, must come first
    .send('hello world');
});

server.listen(3000);
