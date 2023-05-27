const { hash, compare } = require('bcrypt');

const SALT = 10;
hash('hashed text', SALT, (err, hashedText) => {
  if (err) throw err;
  console.log(hashedText);
  compare('hashed text', hashedText, (error, res) => {
    if (error) throw err;
    if (res) {
      console.log('same text');
    } else {
      console.log('texts dont match');
    }
  });
});
