class User {
    constructor(name) {
        this.firstName = name;
    }
}
const json = '{"name": "Jan"}';
const { firstName } = JSON.parse(json);
let user = (firstName === '') ? '' : `User ${firstName}`;
if (user !== '') {
    user = new User(user);
}
//# sourceMappingURL=zad3.js.map