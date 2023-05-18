function every1(array1, predicateFunction) {
    for (let element of array1) {
        if (!predicateFunction(element)) return false;
    }
    return true;
}

function every2(array1, predicateFunction) {
    return !array1.some(element => !predicate(element));
}