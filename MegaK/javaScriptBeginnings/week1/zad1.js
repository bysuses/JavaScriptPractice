import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const name = await rl.question("what is your name: ");
const surname = await rl.question("what is your surname: ");
const age = await rl.question("what is your age: ");
rl.close();
if (age >= 18) {
    console.log(name + " " + surname);
}
