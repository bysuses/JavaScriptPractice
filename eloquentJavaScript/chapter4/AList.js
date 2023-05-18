function push(number, list) {
    let newobject = {
        value: number,
        rest: list
    }
    return newobject;
}

function arrayToList(array) {
    let newlist;
    for (let element of array) {
        newlist = push(element, newlist);
    }
    return newlist;
}

function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function nth(list, value) {
    let iterator = 0;
    while (list) {
        if (list.value == value) return iterator;
        iterator++;
        list = list.rest;
    }
    return;
}

let array = [1, 2, 3, 4];
let list = arrayToList(array);
array = listToArray(list);
console.log(array);
console.log(nth(list, 1));