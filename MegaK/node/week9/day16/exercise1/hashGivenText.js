const { pbkdf2 } = require('crypto');

const toHash = process.argv[2];
const SALT = 'ASDJIIO!@#pjjaa!#@iuh#%$hA892(&*43QdfgWOo&@7GO&*@#&&*#ry78^$738*#g*sxCHiosjh#&$er^thugfuyygu#$TYted#$*';
pbkdf2(toHash, SALT, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});
