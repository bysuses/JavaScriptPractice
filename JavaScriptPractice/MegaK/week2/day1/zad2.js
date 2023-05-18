//run in web browser
function checkNumber(number) {
    if (number % 2 == 0) return 'even';
    else return 'odd';
}

const even = number => number;
const odd = number => number * 2;

let number = prompt("give a number :");
number = Number(number);
if (checkNumber(number) === 'even') console.log(even(number));
else if (checkNumber(Number) === 'odd') console.log(odd(number));