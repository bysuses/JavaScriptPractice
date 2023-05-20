/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import fs from 'fs';

const { readdir, stat } = fs.promises;

async function showFilesystemInConsole(directory) {
  const files = await readdir(directory);
  files.forEach(async (file) => {
    console.log(file);
    if ((await stat(`${directory}/${file}`)).isDirectory()) {
      await showFilesystemInConsole(`${directory}/${file}`);
    }
  });
}

await showFilesystemInConsole('/home/radek/JavaScriptPractice/MegaK/week6/day5/zad2/node_modules/eslint');
