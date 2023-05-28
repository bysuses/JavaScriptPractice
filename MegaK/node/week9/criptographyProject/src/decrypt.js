const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv, createHash: createHmac } = require('crypto');
const { readFile, writeFile } = require('fs').promises;
const { SALT, ALGORITHM, ALGORITHM_BYTES } = require('./constants');

/* eslint no-underscore-dangle: ["error", {"allowAfterThis": true }] */
class Decrypter {
  constructor(algorithm, algorithmBytes, salt, password) {
    this._algorithm = algorithm;
    this._algorithmBytes = algorithmBytes;
    this._salt = salt;
    this._password = password;
  }

  async readEncryptedMessage(filepath) {
    let content = await readFile(filepath, { encoding: 'utf8' });
    content = content.toString();
    content = JSON.parse(content);
    this._encryptedMessage = content.message;
    this._iv = Buffer.from(content.iv.data);
    this._checksum = content.checksum;
    if (this._checksum.passwordHash !== createHmac('sha512', SALT).update(this._password).digest('hex')) {
      throw new Error('Incorrect password was given');
    }
  }

  async decryptMessage() {
    const key = await scrypt(
      this._password,
      this._salt,
      this._algorithmBytes,
    );
    const decipher = createDecipheriv(this._algorithm, key, this._iv);
    let decrypted = decipher.update(this._encryptedMessage, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    this._decryptedMessage = decrypted;
    if (this._checksum.messageHash !== createHmac('sha512', SALT).update(this._decryptedMessage).digest('hex')) {
      throw new Error('incorrect decryption result');
    }
  }

  async writeDataToFile(filepath) {
    await writeFile(filepath, this._decryptedMessage);
  }
}

const givenPassword = process.argv[3];
const givenFile = process.argv[2];

(async () => {
  const decrypter = new Decrypter(ALGORITHM, ALGORITHM_BYTES, SALT, givenPassword);
  try {
    await decrypter.readEncryptedMessage(givenFile);
    await decrypter.decryptMessage();
    await decrypter.writeDataToFile(givenFile);
  } catch (err) {
    console.error(err);
  }
})();
