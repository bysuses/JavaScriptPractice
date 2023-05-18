import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const text = await rl.question("podaj swój tekst: ");

for (let i = 0; i < text.length; i++) {
    if ((i + 1) % 2 === 1) {   //odd letters are printed in caps, counting from 1 not from zero
        console.log(text[i].toUpperCase());
    } else {
        console.log(text[i].toLowerCase());
    }
}

rl.close();