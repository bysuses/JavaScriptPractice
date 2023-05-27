const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');
const { readFile, writeFile } = require('fs').promises;

/* eslint no-underscore-dangle: ["error", {"allowAfterThis": true }] */
class Encrypter {
  constructor(algorithm, algorithmBytes, salt, password) {
    this._algorithmBytes = algorithmBytes; // key lenght for this algorithm
    this._algorithm = algorithm;
    this._salt = salt;
    this._password = password;
  }

  async readDataFromFile(filepath) {
    let content = await readFile(filepath, { encoding: 'utf8' });
    content = content.toString();
    this._unencryptedMessage = content;
  }

  async encryptMessage() {
    // First, we'll generate the key.The key lenghth is dependent on the algorithm.
    // In this case for aes192, it is 24bytes (192 bits).
    const key = await scrypt(
      this._password,
      this._salt,
      this._algorithmBytes,
    );
    const iv = await randomBytes(16);
    this._iv = iv;
    const cipher = createCipheriv(this._algorithm, key, iv);
    let encrypted = cipher.update(this._unencryptedMessage, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    this._encryptedMessage = encrypted;
  }

  async writeDataToFile(filepath) {
    const savedObject = {
      message: this._encryptedMessage,
      iv: this._iv,
    };
    const savedString = JSON.stringify(savedObject);
    await writeFile(filepath, savedString);
  }
}

const ALGORITHM = 'aes-192-cbc';
const SALT = 'sdfgjkWIUEDSJK@#&(*$#$%^&23980354huiodYR&(*werwfhhgEY*F*(EY#*&$hyY&$(&%#(*&EAdyeraewGH&F*((Y#@$F(*)GH#';
const givenPassword = process.argv[3];
const givenFile = process.argv[2];

(async () => {
  const encrypter = new Encrypter(ALGORITHM, 24, SALT, givenPassword);
  try {
    await encrypter.readDataFromFile(givenFile);
    await encrypter.encryptMessage();
    await encrypter.writeDataToFile(givenFile);
  } catch (err) {
    console.error(err);
  }
})();
