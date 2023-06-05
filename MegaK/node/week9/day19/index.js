const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;

(async () => {
  const openFileStream = createReadStream('bengal-cat.jpg');
  const closeFileStream = createWriteStream('bengal-cat-copy.jpg');
  await pipeline(
    openFileStream,
    closeFileStream,
  );
})();
