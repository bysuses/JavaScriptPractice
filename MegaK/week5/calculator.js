class Calculator {
    constructor() {
        let a = prompt('give the first number');
        a = Number(a);
        if (!a && a !== 0) throw new Error('First number is not a number');
        this.a = a;
        let b = prompt('give the first number');
        b = Number(b);
        if (!b && b != 0) throw new Error('Second number is not a number');
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if (this.b === 0) throw new Error('Second number is zero. No division can be done.');
        return this.a / this.b;
    }
}

try {
    const calculator = new Calculator();
    console.log('addition result: ', calculator.add());
    console.log('subtraction result: ', calculator.subtract());
    console.log('multiplication result: ', calculator.multiply());
    try {
        console.log('division result: ', calculator.divide());
    } catch (error) {
        console.log(error.message);
    }
} catch (error) {
    console.log(error.message);
}