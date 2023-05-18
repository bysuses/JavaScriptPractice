const button = document.querySelector('.counting-button');

let counter = Number(localStorage.getItem('counter'));
document.querySelector('h1').innerText = String(counter);

button.addEventListener('click', (event) => {
    counter++;
    document.querySelector('h1').innerText = String(counter);
    localStorage.setItem('counter', counter.toString());
});