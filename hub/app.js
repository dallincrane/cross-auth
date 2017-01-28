var path = require('path')
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  console.log(req.path)
  next()
})

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))

app.listen(3000, () => console.log('listening on port 3000'))
