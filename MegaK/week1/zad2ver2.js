import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let numberA = await rl.question("Give me number a: ");
numberA = Number(numberA);
const operator = await rl.question("Give me arithmetical operator: ");
let numberB = await rl.question("Give me number b: ");
numberB = Number(numberB);

if (operator === "+") {
    console.log(numberA + numberB);
} else if (operator === "-") {
    console.log(numberA - numberB);
} else if (operator === "*") {
    console.log(numberA * numberB);
} else if (operator === "/") {
    console.log(numberA / numberB);
}

rl.close();