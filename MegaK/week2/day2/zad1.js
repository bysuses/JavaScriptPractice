//run in web browser

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.sayHello = () => console.log(`hello from ${this.name} ${this.surname}`);
}

const ourClass = [];

for (let i = 0; i < 10; i++) {
    let name = prompt("give me your name: ");
    let surname = prompt("give me your surname: ");
    ourClass[i] = new Person(name, surname);
}
console.log(ourClass);
for (person of ourClass) person.sayHello();