const button = document.querySelector('button');
const paragarph = document.querySelector('p');
let array;

function countSumInitParagraph() {
    let counter = 0;
    array.forEach(element => counter += Number(element));
    paragarph.innerText = `suma wszystkich podanych liczb = ${counter}`;
}

//initialize array
if (localStorage.getItem("array") === null) {
    array = [];
} else {
    const stringedArray = localStorage.getItem("array");
    array = JSON.parse(stringedArray);
}

//initialize paragraph
countSumInitParagraph();

//on click
button.addEventListener('click', () => {
    const newNumber = prompt('Podaj liczbę');
    array.push(newNumber);
    localStorage.setItem('array', JSON.stringify(array));
    countSumInitParagraph();
});