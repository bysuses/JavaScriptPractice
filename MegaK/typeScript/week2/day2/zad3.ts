class User {
  firstName: string;

  constructor(name: string) {
    this.firstName = name;
  }
}

const json: string='{"name": "Jan"}';
const {firstName}= JSON.parse(json) as User;

let user:string | User = (firstName === '') ? '' : `User ${firstName}`;

if (user !== '') {
  user = new User(user);
}
