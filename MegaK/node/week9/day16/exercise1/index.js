const { pbkdf2 } = require('crypto');

const PASSWORD_HASH = '32055005a723752e7acdeed5450348e66de7a28fa03dd7374a7f31cdeeb500debe83d46425d27ed8c585b231db30f0f010ed8898de56efc97e46a986850a4e2f';
const SALT = 'ASDJIIO!@#pjjaa!#@iuh#%$hA892(&*43QdfgWOo&@7GO&*@#&&*#ry78^$738*#g*sxCHiosjh#&$er^thugfuyygu#$TYted#$*';
const givenPassword = process.argv[2];

pbkdf2(givenPassword, SALT, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  if (derivedKey.toString('hex') === PASSWORD_HASH) {
    console.log('Logged In');
  }
});
