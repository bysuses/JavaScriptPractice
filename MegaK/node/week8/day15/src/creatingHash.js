const { createHmac } = require('crypto');

const SALT = 'ASDJIIO!@#pjjaa!#@iuh#%$hA892(&*43Q';
const hash = createHmac('sha512', SALT)
  .update('hashed text')
  .digest('hex');
console.log(hash);
