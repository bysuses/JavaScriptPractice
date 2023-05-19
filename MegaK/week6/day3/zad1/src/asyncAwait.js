const { lookup } = require('dns').promises;

(async () => {
  try {
    const data = await lookup('google.com');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
