//use in web browser
function display(a, b) {
    console.log(`addition result: ${a + b}`);
    console.log(`subtraction result: ${a - b}`);
    console.log(`multiplication result: ${a * b}`);
    console.log(`division result: ${a / b}`);
}
const display2 = (a, b) => {
    console.log(`addition result: ${a + b}`);
    console.log(`subtraction result: ${a - b}`);
    console.log(`multiplication result: ${a * b}`);
    console.log(`division result: ${a / b}`);
}

const text = prompt("give two numbers");
const textArray = text.split(' ');
let a = textArray[0], b = textArray[1];
a = Number(a);
b = Number(b);
if (a === NaN || b === NaN || !a || !b) {
    console.log("wrong parameter");
} else {
    //display(a, b);
    display2(a, b);
}