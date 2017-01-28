var storage = new CrossStorageClient('http://localhost:3000/hub.html')

storage
  .onConnect()
  .then(() => storage.get('profile'))
  .then((res) => console.log(res))
