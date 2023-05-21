/* eslint no-console: ["error", { allow: ["log"] }] */
const { normalize, resolve } = require('path');

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

const userPath = safeJoin(__dirname, process.argv[2]);
console.log(userPath);
