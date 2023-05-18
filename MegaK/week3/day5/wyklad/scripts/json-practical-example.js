const h2 = document.querySelector('h2');
const personInfo = localStorage.getItem('personInfo');

if (personInfo === null) {
    const name = prompt("What is tour name");
    const surname = prompt("What is your surname");
    const person = {
        name: name,
        surname: surname,
    };
    localStorage.setItem('personInfo', JSON.stringify(person));
    h2.innerText = `Welcome ${person.name} ${person.surname}`;
} else {
    const { name, surname } = JSON.parse(personInfo);
    h2.innerText = `Welcome ${name} ${surname}`;
}
