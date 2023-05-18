import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });         //create the readline interface

const answer = await rl.question("What should I calculate: ");  //get the operation from the user

const fun = (text, indexX, calculationX) => {
    let a = text.slice(0, indexX);                  //get first number
    let b = text.slice(indexX + 1, text.length);    //get second number
    a = Number(a);
    b = Number(b);
    console.log(calculationX(a, b));                //log the result of the calculation in console
};

let indexOfOperator;
if ((indexOfOperator = answer.indexOf("+")) > 0) {                  //if addition, gets the index of + operator
    fun(answer, indexOfOperator, (a, b) => a + b);       //calculate sum of given parameters
}
else if ((indexOfOperator = answer.indexOf("-")) > 0) {             //if subtraction, gets the index of - operator
    fun(answer, indexOfOperator, (a, b) => a - b);       //calculate diffrence of given parameters
}
else if ((indexOfOperator = answer.indexOf("*")) > 0) {             //if multiplication, gets the index of * operator
    fun(answer, indexOfOperator, (a, b) => a * b);       //multiply given values
}
else if ((indexOfOperator = answer.indexOf("/")) > 0) {             //if division, gets the index of / operator
    fun(answer, indexOfOperator, (a, b) => a / b);       //divide given values
}

rl.close();