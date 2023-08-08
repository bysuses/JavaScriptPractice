const json: string = '12';
const anObject =JSON.parse(json) as number;
console.log(anObject);

enum Role {
    Admin,
    User,
    Viewer,
   BannedUser,
}

const john: Person ={
  name: 'John',
  age: 4,
  isDeveloper: false,
  role: Role.Viewer,
};

interface Person{
    name: string;
    age: number;
    isDeveloper: boolean;
    role: Role;
}

class PersonClass implements Person {
  name: string;
  age: number;
  isDeveloper: boolean;
  role: Role;

  constructor(inData: Person) {
    this.name = inData.name;
    this.age = inData.age;
    this.isDeveloper = inData.isDeveloper;
    this.role = inData.role;
  }

  dateOfBirth(): number {
    const today: Date = new Date();
    const yearOfBirth = today.getFullYear() - this.age;
    return yearOfBirth;
  }
}

const personA: Person ={
  name: 'Bartek',
  age: 123,
  isDeveloper: true,
  role: Role.Admin,
};
const personB: Person ={
  name: 'Jacek',
  age: 26,
  isDeveloper: true,
  role: Role.User,
};

function greeting(person: Person) {
  console.log(`Hello ${person.name}`);
}

greeting(personA);
greeting({
  name: 'Arek',
  age: 39,
  isDeveloper: false,
  role: Role.BannedUser,
});
greeting(personB);
greeting(john);

const personClassyCreated = new PersonClass(personB);
console.log(personClassyCreated.dateOfBirth());

const array: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
for (const obj of array) {
  console.log(obj);
}

