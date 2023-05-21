/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

const { lookup } = require('dns');

lookup('google.com', (error, address) => {
  if (!error) {
    console.log(address);
  } else {
    console.log('error has occured: ', error);
  }
});
