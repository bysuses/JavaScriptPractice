/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

import { promises } from 'fs';

const { readFile, appendFile } = promises;

const FILE_PATH = './data/data.txt';

(async () => {
  try {
    const fileData = await readFile(FILE_PATH, 'utf8');
    const splitData = fileData.split('\n');
    const lastValue = splitData[splitData.length - 1];
    await appendFile(FILE_PATH, `\n${2 * lastValue}`, {
      encoding: 'utf8',
      flag: 'a',
    });
  } catch (error) {
    console.error(error);
  }
})();
