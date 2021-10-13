const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'myatkoko',
  [password]: 'sandikyaw',
  'age': 26
};
console.log(user.username);
console.log(user.password);