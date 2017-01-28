var storage = new CrossStorageClient('http://localhost:3000/hub.html')

storage
.onConnect()
.then(() => storage.get('key', JSON.stringify({ foo: 'bar' })))
