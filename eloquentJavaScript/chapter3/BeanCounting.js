/*function countBs(wordWithB){
    let lengthW=wordWithB.length;
    let count=0;
    for(let i=0;i<lengthW;i++){
        if(wordWithB[i]=="B") count++;
    }
    return count;
}*/

function countBs(wordWithB) {
    return countCharacters(wordWithB, "B");
}

console.log(countBs("BuzzroBots"));
console.log(countBs("Buzzrobots"));
console.log(countBs(12));
console.log(countBs(NaN));

function countCharacters(word, character) {
    let lengthW = word.length;
    let count = 0;
    for (let i = 0; i < lengthW; i++) {
        if (word[i] == character) count++;
    }
    return count;
}