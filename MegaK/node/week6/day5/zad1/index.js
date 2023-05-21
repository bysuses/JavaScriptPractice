/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import fs from 'fs';

const { readFile, writeFile } = fs.promises;

(async () => {
  try {
    let data = await readFile('./data/input.json', 'utf-8');
    data = JSON.parse(data);
    const sumOfValues = data.reduce((acc, current) => acc + current, 0);
    await writeFile('./data/sum.txt', String(sumOfValues), 'utf8');
    console.log('Operation finished successfully.');
  } catch (error) {
    console.error(error);
  }
})();
