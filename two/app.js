var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))

app.listen(3002, () => console.log('listening on port 3002'))
