const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://127.0.0.1:27017');

(async () => {
  await client.connect();
  console.log('Client connected');

  const db = client.db('megak-test');
  const users = db.collection('users').find();
  console.log(users);

  await client.close();
  console.log('connection closed');
})();
