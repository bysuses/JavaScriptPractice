function sum(...args) {
    let sumX = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log("all elements must be numbers");
            return;
        }
        sumX += args[i];
    }
    return sumX;
}
console.log(sum(1, 2, 3,));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8,));
