function range(a, b, step = 1) {
    let array = [];
    if (a < b && step < 0) return array;
    if (a > b && step > 0) return array;
    if (a > b && step < 0) {
        for (let i = a; i >= b; i += step) {
            array.push(i);
        }
        return array;
    }
    if (a < b && step > 0) {
        for (let i = a; i <= b; i += step) {
            array.push(i);
        }
        return array;
    }
    return array;
}

function sum(array) {
    let summ = 0;
    for (let element of array) {
        summ += Number(element);
    }
    return summ;
}

console.log(range(16, 7));
console.log(range(7, 16));
console.log(range(7, 16, 2));
console.log(range(7, 16, -1));
console.log(range(16, 7, -3));
console.log(range(16, 7, 3));
console.log(sum(range(16, 7, 3)));
console.log(sum(range(7, 16)));