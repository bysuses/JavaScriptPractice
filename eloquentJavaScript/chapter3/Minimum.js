function minimum(a, b) {
    if (a <= b) return a;
    else return b;
}

console.log(minimum(2, 3));
console.log(minimum('hektor', 3));
console.log(minimum('hektor', 32));
console.log(minimum('3', 'hektor'));
console.log(minimum('hektor', 'he3'));
console.log(minimum(3, 3));
console.log(minimum(16, 3));