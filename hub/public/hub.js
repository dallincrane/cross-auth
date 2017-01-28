CrossStorageHub.init([
  { origin: /localhost:3000$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] },
  { origin: /localhost:3001$/, allow: ['get'] },
  { origin: /localhost:3002$/, allow: ['get'] }
]);

const profile = {
  name: 'Billy Bob Joe',
  title: 'Student',
  picture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y'
}

localStorage.profile = JSON.stringify(profile)
