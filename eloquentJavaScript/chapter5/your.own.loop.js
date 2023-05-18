function loop(value, testFunction, updateFunction, bodyFunction) {
    while (true) {
        if (!testFunction(value)) return;
        bodyFunction(value);
        value = updateFunction(value);
    }
}


const aFunction = (a) => a > 0;
const bFunction = (a) => {
    console.log(a);
    return;
};
const cFunction = (a) => {
    return a - 1;
}

loop(15, aFunction, cFunction, bFunction);