const json = '12';
const anObject = JSON.parse(json);
console.log(anObject);
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Viewer"] = 2] = "Viewer";
    Role[Role["BannedUser"] = 3] = "BannedUser";
})(Role || (Role = {}));
const john = {
    name: 'John',
    age: 4,
    isDeveloper: false,
    role: Role.Viewer,
};
class PersonClass {
    constructor(inData) {
        this.name = inData.name;
        this.age = inData.age;
        this.isDeveloper = inData.isDeveloper;
        this.role = inData.role;
    }
    dateOfBirth() {
        const today = new Date();
        const yearOfBirth = new Date(today.getFullYear() - this.age, 1, 1);
        return yearOfBirth;
    }
}
const personA = {
    name: 'Bartek',
    age: 123,
    isDeveloper: true,
    role: Role.Admin,
};
const personB = {
    name: 'Jacek',
    age: 26,
    isDeveloper: true,
    role: Role.User,
};
function greeting(person) {
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
const array = ['a', 'b', 'c', 'd', 'e', 'f'];
for (const obj of array) {
    console.log(obj);
}
//# sourceMappingURL=index.js.map