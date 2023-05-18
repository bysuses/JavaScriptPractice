function evenOdd(a) {
    if (a == 0) return "even";
    if (a == 1) return "odd";
    if (a < 0) return evenOdd(a + 2);
    return evenOdd(a - 2);
}

console.log(evenOdd(50));
console.log(evenOdd(75));
console.log(evenOdd(-1));