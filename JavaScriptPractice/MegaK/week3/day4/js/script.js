/*
console.log(document.body);
document.querySelector('h1');
document.querySelectorAll('p');
const classic = document.querySelector('.classic');
classic.style.color = 'blue';
classic.style.fontSize = '24px';
*/
const button = document.querySelector('.dark-mode-button');
const body = document.body;

button.addEventListener('click', (event) => {
    let darkMode = body.classList.toggle("darkBody");
    if (darkMode) button.innerText = "Light mode";
    else button.innerText = "Dark mode";
});