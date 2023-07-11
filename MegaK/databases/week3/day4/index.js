/* eslint-disable max-len */
const mysql = require('mysql2/promise');

(async () => {
  // create connection to database
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'megakurs',
    password: '12345678mko',
    decimalNumbers: true,
    namedPlaceholders: true,
  });

  // prepared statement
  const variable = 2;
  const [data] = await connection
    .execute('select * from `parking_square` where `Id` = ?', [variable]);
  const [something] = await connection
    .execute(
      'select * from `parking_square` where `Id` = :var ;',
      {
        var: variable,
      },
    );
  console.log(data, something);

  const cars = [
    {
      registrationNumber: 'sjz 0001',
      brand: 'BMW',
      model: 'e46',
      color: 'czarny metalik',
      firstRegistrationAt: '2021-12-01',
      price: 90000,
      location_address: null,
    },
    {
      registrationNumber: 'sjz 442H',
      brand: 'Mercedes',
      model: 'AMG',
      color: 'czarny metalik',
      firstRegistrationAt: '2021-02-01',
      price: 230000,
      location_address: null,
    },
    {
      registrationNumber: 'sjz 7CC6',
      brand: 'Audi',
      model: 'A7',
      color: 'czarny metalik',
      firstRegistrationAt: '2018-01-10',
      price: 125000,
      location_address: null,
    },
  ];

  const statement = await connection.prepare('insert into `cars` values(?,?,?,?,?,?,?)');

  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const car of cars) {
      // eslint-disable-next-line no-await-in-loop
      await statement.execute(Object.values(car));
    }
  } finally {
    statement.close();
  }
})();
