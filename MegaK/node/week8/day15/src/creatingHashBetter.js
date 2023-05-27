const { pbkdf2 } = require('crypto');

const SALT = 'sdfghpuior325243ASDFAbuk#@$&^%!@#@!DSAHTUY){(L:?<>?{!@#%$&*(CVXasuhngb7856354)})} 07m89-  1207-MN2 #%@$&*(^vngbxcdafs';

pbkdf2('hashed text', SALT, /* iterations */ 100000, /* keylength */64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));
});
