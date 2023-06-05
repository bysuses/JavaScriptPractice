const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGzip } = require('zlib');

(async () => {
  const openFileStream = createReadStream('bengal-cat.jpg');
  const closeFileStream = createWriteStream('bengal-cat-copy.jpg');
  await pipeline(
    openFileStream,
    createGzip(),
    closeFileStream,
  );
})();
