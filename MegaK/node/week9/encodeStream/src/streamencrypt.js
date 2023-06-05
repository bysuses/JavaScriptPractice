const { promisify } = require('util');
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const scrypt = promisify(require('crypto').scrypt);
const { createCipher } = require('crypto');
const { SALT } = require('./salt');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const password = process.argv[4];
const algorithm = 'aes-192-cbc';

console.log(process.argv[0]);

(async () => {
  const key = await scrypt(password, SALT, 24);
  await pipeline(
    createReadStream(inputFile),
    createCipher(algorithm, key),
    createWriteStream(outputFile),
  );
})();
