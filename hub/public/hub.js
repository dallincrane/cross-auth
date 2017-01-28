var main = 'hi'

CrossStorageHub.init([
  { origin: /localhost:3000$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] },
  { origin: /localhost:3001$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] },
  { origin: /localhost:3002$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] }
]);
