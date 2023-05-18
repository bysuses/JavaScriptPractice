function reverseArrayInPlace(array) {
    let length = array.length;
    let dummyValue;
    for (let i = 0; i < length / 2; i++) {
        dummyValue = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = dummyValue;
    }
}

function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[array.length - i - 1]);
    }
    return newArray;
}

array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
reverseArrayInPlace(array);
console.log(array);
array = reverseArray(array);
console.log(array);