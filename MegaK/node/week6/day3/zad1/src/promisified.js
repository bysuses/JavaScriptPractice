/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

const { lookup } = require('dns');
const { promisify } = require('util');

const promisifiedLookup = promisify(lookup);
promisifiedLookup('google.com')
  .then((address) => {
    console.log(address);
  })
  .catch((error) => {
    console.log(error);
  });
