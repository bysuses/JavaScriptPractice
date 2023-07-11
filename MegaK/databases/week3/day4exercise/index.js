const mysql = require('mysql2/promise');
const { v4: uuidv4 } = require('uuid');

(async () => {
  // create connection to database
  const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'courses',
    password: '12345678mko',
    decimalNumbers: true,
    namedPlaceholders: true,
  });

  // wyświetl wszystkie kursy jakie są dostępne
  const [result] = await pool.execute('SELECT `courseName` FROM `courses`');
  console.log(result);

  // wszyscy kursanci wraz z nazwami kursów
  const [result2] = await pool.execute(
    'SELECT `students`.`id`,`name`, `surname`, `courses`.`courseName` FROM `courses`' +
    'RIGHT JOIN `students_courses` ON `courses`.`courseName` =  `students_courses`.`courseName`' +
    'RIGHT JOIN `students` ON `students`.`id` = `students_courses`.`studentId`' +
    'WHERE `students`.`age` >= 18;'
  );
  console.log(result2);

  // usuń wszystkich niepełnoletnich kursantów
  const { affectedRows } = (await pool.execute(
    'DELETE FROM `students` WHERE `students`.`age` < ?;', [18]
  ))[0];
  console.log(affectedRows);

  const maciek = {
    age: 17,
    name: 'Maciek',
    surname: 'ZKlanu',
    street: 'Wspólna',
  };

  // dodanie nowego kursanta z kodu i wyświetlenie jego Id
  const { insertId: data } = (await pool.execute(
    'INSERT INTO `students` (`age`, `name`, `surname`, `street`)' +
    'VALUES (:age, :name, :surname, :street);',
    maciek)
  )[0];
  console.log(data);

  const [{ id: maciekId }] = (await pool.execute(
    'SELECT `id` FROM `students`' +
    'WHERE `age` = :age AND `name` = :name AND `surname` = :surname AND `street` = :street;',
    maciek)
  )[0]
  console.log(`Id Maćka: ${maciekId}`);
  pool.end();
})();
