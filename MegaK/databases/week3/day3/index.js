/* eslint-disable max-len */
const mysql = require('mysql2/promise');

(async () => {
  // create connection to database
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'megakurs',
    password: '12345678mko',
  });

  // selecting data from the database
  const [data] = await connection
    .execute('select * from `cars` where `registrationNumber` = "szy 615"');

  // updating data in the database
  // const { affectedRows } = (await connection
  //   .execute('update `cars` set `price`= 38000 where `registrationNumber` = "SK W8VDF"'))[0];

  // const { insertId } = (await connection
  //   .execute('insert into `cars` values("szy 615", "renault", "clio", "gray  metallic", "2000-03-12", 4000, "Warszawa, Poznańska 12");'))[0];

  console.log(data);
})();
