var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
mongoose.connect('mongodb://localhost/fitm')
app.use(express.static('public'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', (process.env.PORT || 5000))

app.use(express.static('public'))
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
