/* eslint no-console: ["error", { allow: ["log"] }] */
const {
  basename, dirname, normalize, resolve, extname,
} = require('path');

const givenDirPath = process.argv[2];

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

const fullPath = safeJoin(__dirname, process.argv[2]);

const directoryName = dirname(givenDirPath);

console.log(fullPath);
console.log(directoryName);
console.log(basename(givenDirPath));
console.log(extname(fullPath));
