let array = [[1, 2, 3], [4], [5, 6], [8, 9, 7, 10], [12], [14], [15], [16], [15]];
let text1 = "sea";
let text2 = "food";

let result = text1.concat(text2);
console.log(result);

console.log(array.reduce((a, b) => a.concat(b)));